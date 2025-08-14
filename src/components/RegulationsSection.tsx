import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const RegulationsSection = () => {
  const { t } = useTranslation();
  // Get reasons from the active locale via i18n
  const reasons = t('regulations.notification.flanders.reasons', { returnObjects: true }) as string[];
  const notification = t('regulations.notification.sections', { returnObjects: true }) as any;
  
  return (
    <section id="regulations" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            {t('regulations.title')}
          </h2>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold mb-4">
                {t('regulations.introduction.title')}
              </h3>
              <p className="mb-6 text-gray-700">
                {t('regulations.introduction.paragraph1')}
              </p>
              
              <p className="mb-6 text-gray-700">
                {t('regulations.introduction.paragraph2')}
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold mb-2">
                  {t('regulations.certification.title')}
                </h4>
                <p className="mb-4">
                  {t('regulations.certification.paragraph1')}
                </p>
                <p>
                  {t('regulations.certification.paragraph2')}
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.synergrid.be/images/downloads/Synergrid_Plug-and-play_lijst-liste_NL-FR.pdf?1746805819275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    {t('regulations.cta.viewFullList')}
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                {t('regulations.purchase.title')}
              </h3>
              <p className="mb-4 text-gray-700">
                {t('regulations.purchase.paragraph1')}
              </p>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  {t('regulations.notification.title')}
                </h4>
                {notification && (notification.wallonia || notification.brussels || notification.flanders) ? (
                  <div className="space-y-6 text-gray-700">
                    {notification.wallonia && (
                      <div>
                        <p className="font-semibold mb-2">{notification.wallonia.title}</p>
                        <ul className="space-y-1">
                          {Array.isArray(notification.wallonia.dsos) && notification.wallonia.dsos.map((d: any, i: number) => (
                            <li key={`wal-${i}`}>
                              <span className="font-medium">{d.name}:</span> {t('regulations.notification.via', 'notification via')} {d.url ? (
                                <a
                                  href={d.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 font-semibold underline decoration-2 underline-offset-2 hover:text-blue-800 inline-flex items-center gap-1"
                                >
                                  {d.via}
                                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                </a>
                              ) : (
                                <span className="italic">{d.via}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {notification.brussels && (
                      <div>
                        <p className="font-semibold mb-2">{notification.brussels.title}</p>
                        <ul className="space-y-1">
                          {Array.isArray(notification.brussels.dsos) && notification.brussels.dsos.map((d: any, i: number) => (
                            <li key={`bru-${i}`}>
                              <span className="font-medium">{d.name}:</span> {t('regulations.notification.via', 'notification via')} {d.url ? (
                                <a
                                  href={d.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 font-semibold underline decoration-2 underline-offset-2 hover:text-blue-800 inline-flex items-center gap-1"
                                >
                                  {d.via}
                                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                </a>
                              ) : (
                                <span className="italic">{d.via}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {notification.flanders && (
                      <div>
                        <p className="font-semibold mb-2">{notification.flanders.title}</p>
                        <ul className="space-y-1">
                          {Array.isArray(notification.flanders.dsos) && notification.flanders.dsos.map((d: any, i: number) => (
                            <li key={`fla-${i}`}>
                              <span className="font-medium">{d.name}:</span> {t('regulations.notification.via', 'notification via')} {d.url ? (
                                <a
                                  href={d.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 font-semibold underline decoration-2 underline-offset-2 hover:text-blue-800 inline-flex items-center gap-1"
                                >
                                  {d.via}
                                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                </a>
                              ) : (
                                <span className="italic">{d.via}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                        {notification.flanders.note && (
                          <p className="text-sm text-gray-600 mt-2">{notification.flanders.note}</p>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-medium">{t('regulations.notification.walloniaBrussels.title')}</p>
                      <p>{t('regulations.notification.walloniaBrussels.text')}</p>
                    </div>
                    <div>
                      <p className="font-medium">{t('regulations.notification.flanders.title')}</p>
                      <p>{t('regulations.notification.flanders.text')}</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        {reasons.map((reason, index) => (
                          <li key={index}>{reason}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.synergrid.be/fr/homologation/electricite/plug-play"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  {t('regulations.cta.viewPlugPlayList')}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegulationsSection;
