export default function ContactPage() {
  return (
    <section className="space-y-6 max-w-2xl py-12">
      <h2 className="text-3xl font-bold">Contact</h2>

      <p className="text-zinc-400">
        Feel free to reach out for work, collaboration, or questions!
      </p>

      <div className="space-y-4">
        <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
          <h3 className="font-semibold">Email</h3>
          <p className="text-zinc-400 text-sm">sahillamture511@gmail.com</p>
        </div>

        <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
          <h3 className="font-semibold">GitHub</h3>
          <a
            href="https://github.com/SAHIL511-JJ"
            className="text-blue-400 hover:underline text-sm"
            target="_blank"
          >
            github.com/SAHIL511-JJ
          </a>
        </div>
      </div>
    </section>
  );
}
