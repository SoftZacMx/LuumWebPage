#!/usr/bin/env node
/**
 * Cierra procesos que usan el puerto (p. ej. un `next dev` viejo) para evitar
 * 500/404 en /_next/static al abrir localhost:3000.
 */
import { execSync } from "node:child_process";

const port = process.argv[2] ?? "3000";

try {
  const out = execSync(`lsof -ti :${port}`, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
  if (!out) process.exit(0);
  const pids = [...new Set(out.split(/\s+/).filter(Boolean))];
  for (const pid of pids) {
    try {
      process.kill(Number(pid), "SIGKILL");
    } catch {
      /* ignore */
    }
  }
  console.info(`[luuma] Puerto ${port} liberado (${pids.join(", ")}).`);
} catch {
  /* nadie usando el puerto */
}
