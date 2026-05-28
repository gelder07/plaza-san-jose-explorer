import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

/** Formulario de contacto sin backend, muestra toast al enviar */
export function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      toast.error("Por favor completa los campos obligatorios.");
      return;
    }
    setSubmitting(true);
    // Simulación de envío
    await new Promise((r) => setTimeout(r, 700));
    toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    setSubmitting(false);
  };

  const input =
    "w-full px-4 py-3 rounded-lg border border-navy/15 bg-white text-dark-gray placeholder:text-dark-gray/40 focus:outline-none focus:border-warm-orange focus:ring-2 focus:ring-warm-orange/20 transition";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Nombre *
          </label>
          <input
            type="text"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className={input}
            placeholder="Tu nombre completo"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Teléfono
          </label>
          <input
            type="tel"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className={input}
            placeholder="+505 0000 0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
          Email *
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={input}
          placeholder="tu@correo.com"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
          Mensaje *
        </label>
        <textarea
          rows={5}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className={`${input} resize-none`}
          placeholder="Cuéntanos qué tipo de módulo buscas..."
          required
        />
      </div>

      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-lg bg-warm-orange text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-warm-orange/30 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Enviando..." : "Enviar mensaje"}
      </motion.button>
    </motion.form>
  );
}
