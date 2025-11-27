import clsx from "clsx";

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        "'min-h-[320px] ",
        "bg-slate-900",
        "text-slate-100",
        "mb-16",
        "p-8",
        "rounded-xl",
        "flex items-center justify-center"
      )}
    >
      <div>
        <h1 className="text-7xl/tight mb-4 font-extrabold">ERROR 404</h1>
        <p>Erro 404 - This page does not exist in this website</p>
      </div>
    </div>
  );
}
