import React from 'react';
import { H1, H2, H3, H4, P } from 'components/text/Text';
import { PageLayout } from 'components/layout/PageLayout';
import { Head } from 'components/partials/Head';
import { Navigation } from 'components/partials/Navigation';
import { Footer } from 'components/partials/Footer';
import { Link } from 'components/links/Link';

interface Props { }

const imprint: React.FunctionComponent<Props> = () => (
  <div>
    <Head />
    <PageLayout>
      <Navigation />
      <div className="section">
        <div className="section__wrapper imprint__wrapper">
          <H2 className="imprint__title">Imprint</H2>
          <div className="imprint__paragraph">
            <H3>Publisher</H3>
            <P>Yellowreach</P>
            <P>Tel: +41 79 512 90 16</P>
            <P>E-Mail: info@yellowreach.io;</P>
          </div>
          <div className="imprint__paragraph">
            <H3>Realisation</H3>
            <br />
            <H4>Webdevelopment</H4>
            <P>Jérôme Haas</P>
            <P>Email: <Link target="hello@jeromehaas.dev">hello@jeromehaas.dev</Link></P>
            <P>Website: <Link target="https://jeromehaas.dev">jeromehaas.dev</Link></P>
            <br />
            <H4>Motion Design</H4>
            <P>Marc Sen</P>
            <P>Email: <Link target="mailto:hallo@reiheacht.ch">hallo@reiheacht.ch</Link></P>
            <P>Website: <Link target="https://reihe8.ch">reihe8.ch</Link></P>
          </div>
          <div className="imprint__paragraph">
            <H3>Disclaimer</H3>
            <P>The author assumes no responsibility for the correctness, accuracy, timeliness, reliability and completeness of the information. Liability claims regarding damage caused by the use of any information provided, including any kind of information which is incomplete or incorrect, will therefore be rejected. All offers are non-binding. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without prior notice, or to cease publication temporarily or permanently.</P>
          </div>
          <div className="imprint__paragraph">
            <H3>Copyright image and text</H3>
            <P>Please do not use any text, photos, logos or other content from our website and pass them off as your own. Please also do not use the content without a connection to Viva con Agua Switzerland. All logos and images are owned by Viva con Agua Switzerland. If you wish to use text, photos or other content from our website, please contact our office. The further use of images and text of any kind requires the written consent of Yellowreach and is only permitted if the copyright information is mentioned. The use of the Yellowreach logo also requires the written consent of Yellowreach. Thank you very much.</P>
          </div>
        </div>
      </div>
      <Footer />
    </PageLayout>
  </div>
);

export default imprint;
