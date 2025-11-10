"use client";

import { useEffect, useRef } from "react";

type ReporterProps = {
  /** Props solo presentes en la página global-error */
  error?: Error & { digest?: string };
  reset?: () => void;
};

export default function ErrorReporter({ error, reset }: ReporterProps) {
  /** ─ Instrumentación compartida por todas las rutas ─ */
  const lastOverlayMsg = useRef<string>("");
  // ✅ useRef debe inicializarse; usa un tipo portable para setInterval (web/node)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Evita ejecutar en SSR por seguridad (aunque es client component)
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const inIframe = window.parent !== window;
    if (!inIframe) return;

    const send = (payload: unknown) => window.parent.postMessage(payload, "*");

    const onError = (e: ErrorEvent) =>
      send({
        type: "ERROR_CAPTURED",
        error: {
          message: e.message,
          stack: (e as any)?.error?.stack,
          filename: e.filename,
          lineno: e.lineno,
          colno: e.colno,
          source: "window.onerror",
        },
        timestamp: Date.now(),
      });

    const onReject = (e: PromiseRejectionEvent) =>
      send({
        type: "ERROR_CAPTURED",
        error: {
          message: (e as any)?.reason?.message ?? String(e.reason),
          stack: (e as any)?.reason?.stack,
          source: "unhandledrejection",
        },
        timestamp: Date.now(),
      });

    const pollOverlay = () => {
      const overlay = document.querySelector("[data-nextjs-dialog-overlay]");
      const node =
        overlay?.querySelector("h1, h2, .error-message, [data-nextjs-dialog-body]") ?? null;
      const txt = node?.textContent ?? (node as HTMLElement | null)?.innerHTML ?? "";
      if (txt && txt !== lastOverlayMsg.current) {
        lastOverlayMsg.current = txt;
        send({
          type: "ERROR_CAPTURED",
          error: { message: txt, source: "nextjs-dev-overlay" },
          timestamp: Date.now(),
        });
      }
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onReject);
    // ✅ inicia y guarda el id para limpiar correctamente
    pollRef.current = setInterval(pollOverlay, 1000);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onReject);
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };
  }, []);

  /** ─ postMessage extra cuando estamos en la ruta global-error ─ */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!error) return;

    window.parent.postMessage(
      {
        type: "global-error-reset",
        error: {
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          name: error.name,
        },
        timestamp: Date.now(),
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      },
      "*"
    );
  }, [error]);

  /** Páginas normales no renderizan nada */
  if (!error) return null;

  /** UI para la ruta global-error */
  return (
    <html>
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-destructive">Something went wrong!</h1>
            <p className="text-muted-foreground">
              An unexpected error occurred. Please try again fixing with Orchids
            </p>
          </div>

          <div className="space-y-2">
            {process.env.NODE_ENV === "development" && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Error details
                </summary>
                <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                  {error.message}
                  {error.stack && <div className="mt-2 text-muted-foreground">{error.stack}</div>}
                  {error.digest && (
                    <div className="mt-2 text-muted-foreground">Digest: {error.digest}</div>
                  )}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
