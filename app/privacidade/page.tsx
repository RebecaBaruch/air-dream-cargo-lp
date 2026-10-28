import type { Metadata } from 'next'
import Link from 'next/link'
import { contactEmail, siteName } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Como a Air Dream Cargo trata dados pessoais coletados pelo site e canais de contato.',
  alternates: {
    canonical: '/privacidade',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-gray-900">
      <p className="mb-6">
        <Link
          href="/"
          className="text-cyan-700 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
        >
          ← Voltar ao site
        </Link>
      </p>
      <h1 className="mb-6 text-3xl font-bold text-cyan-900">
        Política de Privacidade
      </h1>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-gray-700">
        <p>
          A {siteName} respeita a privacidade dos visitantes do site e dos
          clientes que entram em contato pelos nossos canais (WhatsApp, e-mail e
          formulários).
        </p>
        <h2 className="text-xl font-semibold text-cyan-900">
          Dados que podemos coletar
        </h2>
        <p>
          Podemos receber nome, e-mail, telefone, empresa e informações sobre
          cargas quando você solicita cotação ou fala conosco. Também registramos
          dados técnicos básicos de navegação (como tipo de dispositivo e páginas
          visitadas) por meio de cookies ou ferramentas de analytics, quando
          utilizadas.
        </p>
        <h2 className="text-xl font-semibold text-cyan-900">
          Finalidade do tratamento
        </h2>
        <p>
          Utilizamos os dados para responder solicitações, preparar propostas
          comerciais, prestar serviços de logística e melhorar a experiência no
          site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>
        <h2 className="text-xl font-semibold text-cyan-900">
          Compartilhamento
        </h2>
        <p>
          Não vendemos dados pessoais. Podemos compartilhar informações apenas
          com parceiros operacionais necessários à execução do frete ou quando
          exigido por lei.
        </p>
        <h2 className="text-xl font-semibold text-cyan-900">Seus direitos</h2>
        <p>
          Você pode solicitar acesso, correção ou exclusão de dados, além de
          revogar consentimentos, entrando em contato pelo e-mail{' '}
          <a
            href={`mailto:${contactEmail}`}
            className="text-cyan-700 underline-offset-2 hover:underline"
          >
            {contactEmail}
          </a>
          .
        </p>
        <p className="text-sm text-gray-600">
          Última atualização: outubro de 2026.
        </p>
      </div>
    </main>
  )
}
