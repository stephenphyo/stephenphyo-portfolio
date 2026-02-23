import type { Certificate } from '@/data/portfolio';

type CertificatesGridProps = {
  certificates: Certificate[];
};

const CertificatesGrid = ({ certificates }: CertificatesGridProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {certificates.map((cert) => (
        <article
          key={cert.name}
          className="flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 glass-panel"
        >
          <img
            src={cert.image}
            alt={`${cert.name} certificate preview`}
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div>
              <h3 className="text-lg font-sans font-semibold text-ink-900 dark:text-ink-50">
                {cert.name}
              </h3>
              <p className="text-sm text-ink-500 dark:text-ink-200">{cert.issuer}</p>
            </div>
            <div className="text-sm text-ink-500 dark:text-ink-200">
              <p>{cert.date}</p>
              {cert.credentialId ? <p>Credential ID: {cert.credentialId}</p> : null}
            </div>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring btn btn-outline mt-auto"
            >
              Verify
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CertificatesGrid;
