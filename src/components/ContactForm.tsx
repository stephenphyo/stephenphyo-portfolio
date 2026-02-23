import type React from 'react';
import { useMemo, useState } from 'react';
import type { PortfolioContact } from '@/types';

export type ContactFormProps = {
  contact: PortfolioContact;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const defaultState: FormState = {
  name: '',
  email: '',
  message: ''
};

const validate = (values: FormState): Errors => {
  const errors: Errors = {};
  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please include a message.';
  }
  return errors;
};

const ContactForm = ({ contact }: ContactFormProps) => {
  const [values, setValues] = useState<FormState>(defaultState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const emailJsEnabled = contact.emailJs?.enabled ?? false;

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent('Portfolio inquiry');
    const body = encodeURIComponent(
      `Hi, my name is ${values.name || '...'}\n\n${values.message || ''}`
    );
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }, [contact.email, values.name, values.message]);

  const onChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please fix the highlighted fields.');
      return;
    }

    if (emailJsEnabled) {
      if (!contact.emailJs?.serviceId || !contact.emailJs.templateId || !contact.emailJs.publicKey) {
        setStatus('EmailJS keys are missing. Add them in the data file.');
        return;
      }
      try {
        setIsSending(true);
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          contact.emailJs.serviceId,
          contact.emailJs.templateId,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message
          },
          contact.emailJs.publicKey
        );
        setStatus('Message sent successfully.');
        setValues(defaultState);
      } catch (error) {
        setStatus('EmailJS failed to send. Please try again or email directly.');
      } finally {
        setIsSending(false);
      }
      return;
    }

    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        onSubmit={onSubmit}
        className="grid gap-4 rounded-2xl p-6 glass-panel"
      >
        <div>
          <label className="text-sm font-semibold text-ink-700 dark:text-ink-200" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange('name')}
            className="tech-input focus-ring mt-2 w-full rounded-xl px-4 py-3 text-sm text-ink-800 placeholder:text-ink-400 dark:text-ink-100"
            placeholder="Your full name"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
        </div>
        <div>
          <label className="text-sm font-semibold text-ink-700 dark:text-ink-200" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange('email')}
            className="tech-input focus-ring mt-2 w-full rounded-xl px-4 py-3 text-sm text-ink-800 placeholder:text-ink-400 dark:text-ink-100"
            placeholder="you@email.com"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
        </div>
        <div>
          <label className="text-sm font-semibold text-ink-700 dark:text-ink-200" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={onChange('message')}
            className="tech-input focus-ring mt-2 w-full rounded-xl px-4 py-3 text-sm text-ink-800 placeholder:text-ink-400 dark:text-ink-100"
            placeholder="Tell me about your project..."
          />
          {errors.message ? <p className="mt-1 text-xs text-red-500">{errors.message}</p> : null}
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="focus-ring btn btn-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
        {status ? <p className="text-xs text-ink-500 dark:text-ink-300">{status}</p> : null}
      </form>
      <div className="rounded-2xl p-6 glass-panel">
        <h3 className="text-xl font-sans font-semibold text-ink-900 dark:text-ink-50">
          {contact.detailsTitle ?? 'Contact details'}
        </h3>
        <p className="mt-2 text-sm text-ink-500 dark:text-ink-200">
          {contact.detailsText ??
            'Prefer email? I typically respond within 24 hours. EmailJS integration is optional and disabled by default.'}
        </p>
        <div className="mt-4 rounded-xl border border-ink-200/70 bg-white/70 p-4 text-sm text-ink-700 dark:border-ink-700 dark:bg-ink-800/60 dark:text-ink-200">
          <p className="font-semibold">{contact.email}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="focus-ring btn btn-outline btn-sm"
            >
              {copied ? 'Copied' : 'Copy Email'}
            </button>
            <a
              href={`mailto:${contact.email}`}
              className="focus-ring btn btn-outline btn-sm"
            >
              Open Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;


