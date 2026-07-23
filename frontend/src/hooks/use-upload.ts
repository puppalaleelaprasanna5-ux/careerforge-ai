import { useCallback, useState } from "react";

export interface UploadState {
  file: File | null;
  progress: number;
  status: "idle" | "uploading" | "done" | "error";
  error?: string;
}

export function useUpload() {
  const [state, setState] = useState<UploadState>({ file: null, progress: 0, status: "idle" });

  const setFile = useCallback((file: File | null) => {
    setState({ file, progress: 0, status: "idle" });
  }, []);

  const simulateUpload = useCallback(async () => {
    setState((s) => ({ ...s, status: "uploading", progress: 0 }));
    for (let p = 10; p <= 100; p += 10) {
      await new Promise((r) => setTimeout(r, 120));
      setState((s) => ({ ...s, progress: p }));
    }
    setState((s) => ({ ...s, status: "done" }));
  }, []);

  const reset = useCallback(() => setState({ file: null, progress: 0, status: "idle" }), []);

  return { ...state, setFile, simulateUpload, reset };
}
