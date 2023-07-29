import React from 'react';
import Footer from '../../components/Footer/Footer';


const grimoireSite = () => {
    const iframeHeight = '800px';
  return (
    <main>
    <section className='kasa'>
      <iframe
        src="https://delahocheemmanuel.github.io/site_projet_7"
        title="Booki"
        width="100%"
        height={iframeHeight}
        style={{ border: 'none' }}
      />
    </section>
    <Footer />
    </main>
  );
};

export default grimoireSite;