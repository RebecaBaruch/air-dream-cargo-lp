import { Button } from '@/components/button'

const tones = ['primary', 'secondary', 'destructive'] as const
const sizes = ['sm', 'md', 'lg'] as const

export default function Home() {
  return (
    <main className="min-h-full bg-gray-100 px-8 py-16 text-gray-900">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 bg-white p-10">
        <div>
          <p className="text-1 leading-14 text-gray-500">buttons</p>
          <h1 className="mt-2 font-sans text-6 leading-5 font-semibold tracking-0">
            Buttons
          </h1>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-10">
          {tones.map((tone) => (
            <div key={tone} className="flex flex-col gap-8">
              {(['filled', 'outline'] as const).map((variant) => (
                <div key={variant} className="flex flex-col items-start gap-3">
                  {sizes.map((size) => (
                    <Button key={size} size={size} variant={variant} tone={tone}>
                      Button Text
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-8">
            {(['filled', 'outline'] as const).map((variant) => (
              <div key={variant} className="flex flex-col items-start gap-3">
                {sizes.map((size) => (
                  <Button key={size} size={size} variant={variant} disabled>
                    Button Text
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-4">
          {(['primary', 'secondary'] as const).map((tone) => (
            <div key={tone} className="flex flex-col items-start gap-4">
              {sizes.map((size) => (
                <Button key={size} size={size} variant="link" tone={tone}>
                  Button Text
                </Button>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
