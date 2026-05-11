import { Button } from '@/components/ui/Button';

export function HomePage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Bienvenido</h2>
      <p className="text-slate-400">Template base del Equipo Nelson.</p>
      <Button>Accion principal</Button>
    </div>
  );
}
