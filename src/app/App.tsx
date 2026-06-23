import { useState } from 'react';
import { Footer } from '@/app/components/layout/Footer';
import { Nav } from '@/app/components/layout/Nav';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { EssenceSection } from '@/app/components/sections/EssenceSection';
import { FoundersSection } from '@/app/components/sections/FoundersSection';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { ObjectivesSection } from '@/app/components/sections/ObjectivesSection';
import { ServicesSection } from '@/app/components/sections/ServicesSection';
import { StaffSection } from '@/app/components/sections/StaffSection';
import { TransparencySection } from '@/app/components/sections/TransparencySection';
import { NoiseBg } from '@/app/components/shared/NoiseBg';
import { ScrollProgress } from '@/app/components/shared/ScrollProgress';
import { translations, type Lang } from '@/app/content/translations';

export default function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<Lang>('es');

  const tx = translations[lang];
  const themeClass = dark ? 'theme-dark dark' : 'theme-light';

  return (
    <div
      id="top"
      className={`app-shell min-h-screen relative overflow-x-hidden ${themeClass}`}
    >
      <ScrollProgress />
      <NoiseBg />
      <Nav
        dark={dark}
        onTheme={() => setDark((d) => !d)}
        lang={lang}
        onLang={() => setLang((l) => (l === 'en' ? 'es' : 'en'))}
        tx={tx}
      />
      <main>
        <HeroSection tx={tx} />
        <AboutSection tx={tx} />
        <EssenceSection tx={tx} />
        <ServicesSection tx={tx} />
        <ObjectivesSection tx={tx} />
        <FoundersSection tx={tx} />
        <StaffSection tx={tx} />
        <TransparencySection tx={tx} />
      </main>
      <Footer tx={tx} />
    </div>
  );
}
