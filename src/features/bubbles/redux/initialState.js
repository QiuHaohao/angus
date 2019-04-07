// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const _ = require('lodash');

const articles_array = [  
   {  
      "id":"sungei-kadut-murder-23-year-old-man-charged-murder",
      "title":"Sungei Kadut murder: 22-year-old man charged",
      "importance":53.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/20190313_murder_raj.jpg?itok=YAoIIUP7",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/sungei-kadut-murder-22-year-old-man-charged-murder",
      "topic":"Editor\'s Picks",
      "publication_date":"13\/03\/2019",
      "angus_bot_message":"Good afternoon. You might be interested in this! \n\nOne dead in Sungei Kadut incident; man, 23, to be charged with murder. Victims, suspect know each other.\n\nA 23-year-old man has been arrested and will be charged with murder, after a 30-year-old man was found dead inside the International Furniture Centre on Sungei Kadut Loop."
   },
   {  
      "id":"singpost-fined-s300000-service-lapses-2018",
      "title":"SingPost fined S$300,000 for service lapses in 2018",
      "importance":70.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/singpost_2.jpg?itok=63xtQ4u_",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/singpost-fined-s300000-service-lapses-2018",
      "topic":"Editor\'s Picks",
      "publication_date":"29\/03\/2019",
      "angus_bot_message":"This is one of the many in the ongoing series of investigation on SingPost lapses since 2017. \n\nThe entire saga began when a postman was caught dumping undelivered mail into a bin in Ang Mo Kio, in January. \n\nThis sparked investigation into Singpost and their methods of work. \n\nFurther investigation has caused SingPost to incur an additional fee of $300,000, on top of the existing $100,000 fee."
   },
   {  
      "id":"smokers-caught-outside-orchard-road-yellow-boxes-face-fines-s1000-april-1",
      "title":"Smokers caught outside Orchard Road \u2018yellow boxes\u2019 face fines of up to S$1,000 from April 1",
      "importance":100.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/tdyorchard0329.jpg?itok=44u5Dylf",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/smokers-caught-outside-orchard-road-yellow-boxes-face-fines-s1000-april-1",
      "topic":"Environment",
      "publication_date":"29\/03\/2019",
      "angus_bot_message":"Good day. Hurrah, Orchard Road smoke-zones will be enforced soon. \n\nFrom April 1, smokers in the Orchard Road precinct caught lighting up outside of designated smoking areas can expect a fine, rather than a warning, said the National Environment Agency (NEA) on Friday (March 29)."
   },
   {  
      "id":"haze-new-paradigm-changing-world-order",
      "title":"From haze to trade, Asean must no longer be weak in responding to challenges",
      "importance":33.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/asean_0.jpg?itok=qvQkshBw",
      "article_url":"https:\/\/www.todayonline.com\/commentary\/haze-new-paradigm-changing-world-order",
      "topic":"Environment",
      "publication_date":"21\/02\/2019",
      "angus_bot_message":"Good afternoon. Ooph, don\'t we just hate haze season?\n\nThe crisis in Thailand has been a wake-up call to the way Thais think about the need for a more environmentally friendly strategy to get rid of this problem for good."
   },
   {  
      "id":"when-both-rich-and-poor-feel-heat-climate-change",
      "title":"When both the rich and poor feel the heat from climate change",
      "importance":45.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/us_company_global_5_1.jpg?itok=HcE4huXh",
      "article_url":"https:\/\/www.todayonline.com\/commentary\/when-both-rich-and-poor-feel-heat-climate-change",
      "topic":"Environment",
      "publication_date":"15\/01\/2019",
      "angus_bot_message":"Good day. Rich or poor? Climate change ain\'t got time for you.\n\nReports have put the spotlight on how different segments of society may be affected by climate change."
   },
   {  
      "id":"rakuten-says-book-990-million-gain-lyft-investment-0",
      "title":"Rakuten says to book $990 million gain on Lyft investment",
      "importance":34.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/2019-04-01T034101Z_1_LYNXNPEF3017Y_RTROPTP_4_TELECOMS-MOBILEWORLD-RAKUTEN.JPG?itok=JKTQ5BJa",
      "article_url":"https:\/\/www.todayonline.com\/world\/rakuten-says-book-990-million-gain-lyft-investment-0",
      "topic":"Finance",
      "publication_date":"01\/04\/2019",
      "angus_bot_message":"Good afternoon. W O W look at Rakuten go!\n\nJapan\'s Rakuten said on Monday it will book a 110 billion yen ($989.74 million) gain in the quarter through March on its investment in Lyft following the U.S. ride-hailing firm\'s listing last week."
   },
   {  
      "id":"viral-video-dispute-gojek-driver-disturbing-see-passenger-being-mocked-and-shamed",
      "title":"Viral video of dispute with Gojek driver: Disturbing to see passenger being mocked and shamed",
      "importance":90.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/20190213_gojek_social_meida.jpg?itok=D5Z8raSp",
      "article_url":"https:\/\/www.todayonline.com\/voices\/viral-video-dispute-gojek-driver-disturbing-see-passenger-being-mocked-and-shamed",
      "topic":"Technology",
      "publication_date":"13\/02\/2019",
      "angus_bot_message":"This commentary takes a stand that is different from the common - the author here comments on how the case has quickly turned into cyber-bullying, calling out all individuals and institutions who have hoped on the bandwagon without second thought. "
   },
   {  
      "id":"anti-fake-news-laws-what-happens-if-you-forward-false-whatsapp-message",
      "title":"Anti-fake news laws: What happens if you forward a false WhatsApp message?",
      "importance":79.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/istock-964034600.jpg?itok=d3Wifr0Q",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/anti-fake-news-laws-what-happens-if-you-forward-false-whatsapp-message",
      "topic":"Technology",
      "publication_date":"01\/04\/2019",
      "angus_bot_message":"The government is ramping up initiatives to tackle fake news  \ud83d\udcf0 \ud83d\uddde Soon, those found guilty of perpetuating falsehoods can face jail time or fines. \n\nSingapore \ud83c\uddf8\ud83c\uddec, alongside Malaysia \ud83c\uddf2\ud83c\uddfe and Philippines \ud83c\uddf5\ud83c\udded are one of the first countries in Asia to have laws against fake news, in a time where fake news plagues the region. \n\nWhile fake news might have a stronger impact on politics in our neighbouring country, Singapore is taking measures to ensure we don\'t end up in the same plight. However, this is met with international criticism, many declare that this may threaten freedom of speech."
   },
   {  
      "id":"hsa-blood-donor-data-leak-when-sorry-may-not-be-enough",
      "title":"HSA blood donor data leak: When \u2018sorry\u2019 may not be enough",
      "importance":88.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/20190321_hsa_najeer.jpg?itok=kTAFTCPM",
      "article_url":"https:\/\/www.todayonline.com\/commentary\/hsa-blood-donor-data-leak-when-sorry-may-not-be-enough",
      "topic":"Technology",
      "publication_date":"21\/03\/2019",
      "angus_bot_message":"Good day. With data security leaks happening more frequently in S\'pore, the latest leaks with 808,201 blood donors from the Health Sciences Authority (HSA) database had their personal details exposed in January this year. \ud83d\ude21\n\nBeyond saying sorry in future, the Government as a whole has to demonstrate more rigour in its cybersecurity efforts.\n\nMeanwhile, the government has been actively looking to expand its cyber security arm - those who are fresh out of university can consider a career in this field!"
   },
   {  
      "id":"facebook-instagram-users-affected-worldwide-outage",
      "title":"Facebook, Instagram users affected in worldwide outage",
      "importance":45.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/20181002_facebook_mf_3.jpeg?itok=YmlY8-5D",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/facebook-instagram-users-affected-worldwide-outage",
      "topic":"Technology",
      "publication_date":"14\/03\/2019",
      "angus_bot_message":"Good afternoon, this report was posted on 14 MARCH 2019. The social media detox that no one asked for \ud83d\ude12\n\n\'Most severe outage\' as Facebook, Instagram users affected in worldwide outage.\n\nReports on Downdetector, a website for reporting problems on applications and websites, ranged from troubles logging into accounts to the inability to post comments or photos."
   },
   {  
      "id":"duterte-hits-out-beijing-stepping-back-pro-china-stance",
      "title":"Duterte hits out at Beijing, stepping back from pro-China stance",
      "importance":55.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/duterte_reuters.jpg?itok=cEyijw8n",
      "article_url":"https:\/\/www.todayonline.com\/world\/duterte-hits-out-beijing-stepping-back-pro-china-stance",
      "topic":"World",
      "publication_date":"24\/08\/2019",
      "angus_bot_message":"The latest in the Xi-Duterte bromance: Philippines issues stern warnings to China about its behaviour in the South China sea dispute. \ud83c\udde8\ud83c\uddf3\ud83c\uddf5\ud83c\udded\n\nPhilippines, who once had strong affiliations with the U.S., has been heavily involved with China in these last two years. With a growth in trade relations, tensions over the South China sea dispute has been placed aside. "
   },
   {  
      "id":"explainer-pros-and-cons-customs-union-brexit-britain",
      "title":"Explainer: Pros and cons of a customs union for Brexit Britain",
      "importance":65.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/2019-04-01T103059Z_1_LYNXNPEF301QG_RTROPTP_4_BRITAIN-EU.JPG?itok=fhVAQ_Q1",
      "article_url":"https:\/\/www.todayonline.com\/world\/explainer-pros-and-cons-customs-union-brexit-britain",
      "topic":"World",
      "publication_date":"01\/04\/2019",
      "angus_bot_message":"Good day. Will Brexit finally move forward? Here\'s the tea. \ud83c\udf75\n\nA customs union could emerge as a preferred solution for lawmakers who have rejected Prime Minister Theresa May\'s deal.\n\nThe British parliament will on Monday hold a second round of indicative votes on various Brexit alternatives on a customs union that would allow an easier flow of goods, but would not itself guarantee frictionless trade and would limit, but not prevent, Britain\'s capacity to strike its own free trade deals."
   },
   {  
      "id":"dont-discriminate-against-our-firms-chinas-xi-tells-new-zealand",
      "title":"Don\'t discriminate against our firms, China\'s Xi tells New Zealand",
      "importance":60.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/2019-04-01T134419Z_2_LYNXNPEF301N7_RTROPTP_4_CHINA-NEWZEALAND.JPG?itok=rNA23Br5",
      "article_url":"https:\/\/www.todayonline.com\/world\/dont-discriminate-against-our-firms-chinas-xi-tells-new-zealand",
      "topic":"World",
      "publication_date":"01\/04\/2019",
      "angus_bot_message":"Good afternoon. Chinese President Xi Jinping called upon New Zealand on Monday not to discriminate against Chinese companies during a meeting with Prime Minister Jacinda Ardern. \ud83c\uddf3\ud83c\uddff\ud83d\ude45\u200d\u2640\ufe0f\ud83c\udde8\ud83c\uddf3\n\nBack in November of last year, New Zealand rejected a bid by Chinese telecom giant Huawei to build a 5G mobile network \ud83d\udcf2"
   },
   {  
      "id":"singapore-bid-unesco-recognition-hawker-culture-not-about-origins-certain-dishes",
      "title":"S\u2019pore\u2019s bid for Unesco recognition of hawker culture \u2018not about origins\u2019 of certain dishes",
      "importance":88.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/20181022_asnomination_najeer_0.jpg?itok=x5eHvhTi",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/singapore-bid-unesco-recognition-hawker-culture-not-about-origins-certain-dishes",
      "topic":"Culture",
      "publication_date":"28\/03\/2019",
      "angus_bot_message":"We\'ve finally submitted our application to UNESCO, after months of talk about nominating our hawker culture as an \"      intangible cultural heritage\". \ud83c\uddf8\ud83c\uddec\ud83c\udf0e\ud83d\udc45\n\nIn recent years, there has been considerable effort in keeping our hawker culture alive - small platforms such as \"Our Grandfather Story\" specialise in short videos featuring these stories of unsung hawker heroes. \n\nMeanwhile, we have to wait until 2020, when the verdict by UNESCO will be out. "
   },
   {  
      "id":"singapore-chinese-community-different-from-others-pm-lee-chinese-new-year-message",
      "title":"S\'pore\'s Chinese community different from others elsewhere: PM Lee",
      "importance":80.0,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/pmwalk6.jpg?itok=FTDt0xki",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/singapore-chinese-community-different-from-others-pm-lee-chinese-new-year-message",
      "topic":"Culture",
      "publication_date":"04\/03\/2019",
      "angus_bot_message":"GNFC XNKL! \ud83c\udf4a\ud83c\udf4aIn his Chinese New Year message, PM Lee said Chinese identity \u2014 just like tradition \u2014 is dynamic in nature.\n\nWith new Chinese immigrants moving to Singapore and as new generations come of age, the Singaporean Chinese identity \u201cwill keep on evolving\u201d, he added."
   },
   {  
      "id":"hdb-resale-prices-down-slightly-q1-continuing-declining-trend",
      "title":"HDB resale prices down slightly in Q1, continuing declining trend",
      "importance":32,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/hdb01.jpg?itok=O4xN_j9m",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/hdb-resale-prices-down-slightly-q1-continuing-declining-trend",
      "topic":"Finance",
      "publication_date":"01\/04\/2019",
      "angus_bot_message":"Good day. Prices of resale flats for the first quarter this year fell 0.3 per cent from the fourth quarter in 2018. \ud83c\udfd8\ufe0f\ud83d\udcc9\n\nContinuing a declining trend, according to flash estimates released by the Housing and Development Board (HDB) on Monday (Apr 1)."
   },
   {  
      "id":"singapore-uses-insects-gobble-food-waste",
      "title":"Singapore uses insects to gobble up food waste",
      "importance":57,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/ezxinsects0401.jpg?itok=RwL8aQfN",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/singapore-uses-insects-gobble-food-waste",
      "topic":"Environment",
      "publication_date":"01\/04\/2019",
      "angus_bot_message":"Pssst. Did you know... Singapore \ud83c\uddf8\ud83c\uddechas black soldier fly farms to combat food waste? \n\nMr Darren Ho \ud83d\udc68\u200d\ud83c\udf3eis the founder of the Insectta, Singapore\'s first urban insect farm is committed to create a production system where nothing goes waste \u267b\ufe0f\u267b\ufe0f"
   },
   {  
      "id":"ho-ching-step-down-chairman-temaseks-subsidiary",
      "title":"Ho Ching to step down as chairman of Temasek\u2019s subsidiary",
      "importance":75,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/temasek_composite1.jpg?itok=vhJ9crvM",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/ho-ching-step-down-chairman-temaseks-subsidiary",
      "topic":"Finance",
      "publication_date":"19\/03\/2019",
      "angus_bot_message":"Good day. Ms Ho Ching will step down as chairman of Temasek International, the wholly owned management and investment arm of parent company Temasek Holdings. \ud83d\udc75\ud83c\udffc\ud83d\udcc9\n\n\u201cTemasek needs to be ready for disruptive challenges and opportunities in the decade ahead,\u201d Ms Ho Ching said of new appointments at Temasek International, an arm of Temasek Holdings."
   },
   {  
      "id":"explainer-data-portability-and-how-it-affects-everything-streaming-music-insurance-plans",
      "title":"Explainer: Data portability and how it affects everything from streaming music to insurance plans",
      "importance":24,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/20190303_binary_reuters.jpg?itok=W22KGvHA\\",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/explainer-data-portability-and-how-it-affects-everything-streaming-music-insurance-plans",
      "topic":"Culture",
      "publication_date":"03\/03\/2019",
      "angus_bot_message":"Good afternoon. \n\nAs part of an ongoing review of the Personal Data Protection Act 2012 (PDPA), \ud83d\udda5\ufe0f the Government has released a paper \ud83d\udcdddiscussing the impact and benefits of data portability and hopes to commence discussions on its implementation."
   },
   {  
      "id":"surge-abandoned-cats-microchipping-answer",
      "title":"Surge in abandoned cats \u2014 is microchipping the answer?",
      "importance":43,
      "thumbnail_url":"https:\/\/www.todayonline.com\/sites\/default\/files\/styles\/new_app_article_detail\/public\/photos\/43_images\/nkcats.jpg?itok=ABy1ruIe",
      "article_url":"https:\/\/www.todayonline.com\/singapore\/surge-abandoned-cats-microchipping-answer",
      "topic":"Culture",
      "publication_date":"21\/03\/2019",
      "angus_bot_message":"Is microchipping the answer to the surge in abandoned cats lately? \ud83d\udc31\ud83d\udc31\n\nThere were 57 cases of cat abandonment in 2018, up from just nine cases in 2016. Cat breeders say one reason is the rise of \u201cbackyard breeders\u201d, who sell pedigree cats online at a fraction of the prices in licensed pet shops."
   }
]

const articles = _.keyBy(articles_array, 'id')
const articleIds = _.map(
    articles_array,
    (article) => article.id
  )

const topicColors = {
  "Editor's Picks":"#fdb22a",
  Environment: "#106f71",
  World: "#d53028",
  Finance: "#f5fb48",
  Technology: "#2ba6d5",
  Culture: "green"
}

const initialState = {
  topicColors,
  articles,
  articleIds,
  archivedArticleIds: [],
  hovering: undefined,
};

export default initialState;
