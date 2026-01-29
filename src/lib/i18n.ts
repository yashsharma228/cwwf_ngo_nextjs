import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      siteName: "Chahat Welfare Foundation",
      nav: {
        home: "Home",
        about: "About Us",
        programs: "Our Programs",
        education: "Education Support",
        women: "Women Skill Development",
        impact: "Impact",
        gallery: "Gallery",
        involved: "Get Involved",
        donate: "Donate",
        volunteer: "Volunteer",
        contact: "Contact Us",
        language: "Language"
      },
      header: {
        whoWeAre: "Who We Are",
        whatWeDo: "What We Do",
        newsStories: "News & Gallery",
        howToHelp: "How To Help",
        visionMission: "Vision & Mission"
      },
      hero: {
        title: "Inclusivity for disadvantaged communities",
        subtitle:
          "Quality education and women empowerment through financial, moral support and skill development.",
        ctaDonate: "Donate",
        ctaVolunteer: "Volunteer"
      },
      home: {
        hero: { narrative: "Chahat Welfare Foundation", primaryCause: "Inclusivity for disadvantaged communities — Quality education and women empowerment through financial, moral support and skill development." },
        howWeWork: {
          title: "How we work to make a difference",
          education: "Education Support",
          women: "Women Skill Development",
          impact: "Our Impact",
          involved: "Get Involved"
        },
        impactStories: { title: "Impact Stories" },
        stories: {
          story1: { title: "From Struggle to School: A Child's Journey", desc: "With financial support and private coaching from Chahat Welfare Foundation, a young student from Jaipur overcame barriers and is now excelling in studies." },
          story2: { title: "Stitching a New Future", desc: "A woman from our skill development center now stitches ethnic wear for local brands—100% profit goes to her, building financial independence." },
          story3: { title: "Education and Dignity Together", desc: "Our combined education and moral support program has helped hundreds of underprivileged children stay in school and dream big." }
        },
        readMore: "Read more...",
        readMoreAbout: "Read More",
        foundationBlock: {
          title: "The Chahat Welfare Foundation",
          desc: "Chahat Welfare Foundation is an initiative for inclusivity of disadvantaged classes of society. We impart quality education to underprivileged and victimized children by providing financial and moral support, including private coaching and partial fees funding. Our skill development center empowers women through ethnic wear and cotton bag production—100% profit goes to them.",
          vision: "Our Vision",
          visionText: "No child in India shall be deprived of education because of disadvantage. Every woman shall have the opportunity to earn with dignity.",
          mission: "Our Mission",
          missionText: "Imparting quality education to underprivileged children and empowering women through skill development—with financial and moral support."
        },
        stats: { founded: "Founded", children: "Children Helped", women: "Women Empowered", volunteers: "Volunteers" },
        campaigns: {
          title: "Campaigns",
          c1: { title: "Sponsor a Child's Education" },
          c2: { title: "Women Skill Center Expansion" },
          c3: { title: "Education & Livelihood Fund" }
        },
        testimonials: {
          title: "Hear from our Contributors",
          t1: "Chahat Welfare Foundation's work in education and women empowerment is deeply impactful. Supporting them has been a privilege.",
          t1Name: "A Supporter",
          t1Role: "Donor",
          t2: "The skill development center gives women not just income but dignity. The model of 100% profit to participants is exemplary.",
          t2Name: "A Partner",
          t2Role: "CSR Partner"
        },
        updates: {
          title: "Latest Updates",
          u1: "Skill development center partners with new local brands",
          u2: "Education support program reaches 500+ children milestone",
          u3: "Women empowerment workshop in Jaipur"
        },
        education: { title: "Education Support", description: "Providing quality education to underprivileged children through financial and moral support." },
        women: { title: "Women Skill Development", description: "Empowering women through skill development centers, creating sustainable livelihoods." },
        impact: { title: "Our Impact", description: "Transforming lives and communities through dedicated programs and initiatives." },
        learnMore: "Learn More",
        about: { title: "About Chahat Welfare Foundation", description: "Founded in 2017, Chahat Welfare Foundation is an initiative for inclusivity of disadvantaged classes of society. We are committed to imparting quality education to underprivileged and victimized children by providing financial and moral support, including private coaching and partial fees funding." },
        readMoreLegacy: "Read More About Us",
        cta: { title: "Join Us in Making a Difference", description: "Your support can transform lives. Whether through donations, volunteering, or spreading awareness, every contribution matters." }
      },
      footer: {
        cta: "The Best Way to Make a Difference in the Lives of Others",
        tagline: "An initiative for inclusivity of disadvantaged communities through education and women empowerment.",
        onlineDonations: "Online donations",
        getInTouch: "Get In Touch",
        newsletter: "Subscribe E-newsletter",
        subscribe: "Subscribe"
      },
      contact: {
        phoneLabel: "Phone",
        phone: "7211155790",
        headquarters: "JAIPUR, RAJASTHAN",
        founded: "Founded 2017",
        industry: "Non-profit Organizations",
        companySize: "Company size 11-50 employees",
        hero: { subtitle: "Reach out for donations, volunteering, partnerships, or any inquiry." },
        info: {
          address: { title: "Headquarters" },
          industry: "Industry"
        },
        form: {
          title: "Send a Message",
          name: "Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          submit: "Send Message"
        },
        thankYou: {
          title: "Message Sent!",
          description: "We will get back to you soon.",
          back: "Back to Home"
        }
      },
      education: {
        hero: { subtitle: "Imparting quality education to underprivileged and victimized children through financial and moral support." },
        whatWeOffer: { title: "What We Offer" },
        offerings: {
          coaching: "Private coaching for underprivileged children",
          moral: "Moral and emotional support",
          partialFees: "Partial school fees funding"
        },
        bullet1: "Private coaching for underprivileged children",
        bullet2: "Partial school fees funding",
        bullet3: "Financial and moral support",
        bullet4: "Educational materials and supplies",
        cta: { title: "Support Education", description: "Your donation helps us provide quality education to more children." }
      },
      women: {
        hero: { subtitle: "Our skill development center where women stitch ethnic wear and cotton bags for local brands. 100% of the profit goes to them." },
        highlights: {
          title: "What We Do",
          ethnic: { title: "Ethnic Wear", desc: "Women are trained to stitch ethnic wear for local brands." },
          bags: { title: "Cotton Bags", desc: "Production of cotton bags for local brands and markets." },
          profit: { title: "100% Profit to Women", desc: "Entire profit from sales is entitled to the women participants." }
        },
        bullet1: "Stitching training for ethnic wear",
        bullet2: "Cotton bag production for local brands",
        bullet3: "Entire profit entitled to participating women",
        bullet4: "Sustainable livelihoods and financial independence",
        cta: { title: "Support Women Empowerment", description: "Donate or partner with us to expand our skill development center." }
      },
      impact: {
        hero: { title: "Our Impact", subtitle: "Transforming lives and communities through education and women empowerment since 2017." },
        stats: {
          founded: "Founded",
          children: "Children Supported",
          women: "Women Empowered",
          team: "Team Size"
        },
        areas: {
          title: "Areas of Impact",
          education: { title: "Education Support", desc: "Quality education for underprivileged children through financial support, private coaching, and partial fee funding." },
          women: { title: "Women Skill Development", desc: "Skill development center for women—ethnic wear and cotton bags for local brands, with 100% profit to participants." },
          community: { title: "Community & Inclusivity", desc: "An initiative for inclusivity of disadvantaged classes of society, headquartered in Jaipur, Rajasthan." }
        },
        cta: { title: "See Our Work", description: "Explore our gallery and get involved." }
      },
      gallery: {
        hero: { subtitle: "Moments from our programs, education initiatives, and women skill development center." },
        education: "Education",
        women: "Women Skill Development",
        community: "Community",
        events: "Events",
        programs: "Programs",
        general: "General",
        placeholder: "Photo gallery coming soon"
      },
      involved: {
        hero: { subtitle: "Your support can transform lives. Donate, volunteer, or spread the word." },
        ways: {
          title: "Ways to Get Involved",
          donate: { title: "Donate", desc: "Your financial contribution helps us run education and women skill development programs." },
          volunteer: { title: "Volunteer", desc: "Give your time and skills to support education and women empowerment." },
          spread: { title: "Spread the Word", desc: "Share our mission and connect us with partners and beneficiaries." }
        },
        learnMore: "Learn More",
        cta: { title: "Have Questions?", description: "Reach out to us for partnerships or inquiries." }
      },
      donate: {
        hero: { subtitle: "Your contribution helps us provide education and empower women. Every rupee counts." },
        form: {
          title: "Choose Your Donation Amount",
          preset: "Quick select (₹)",
          custom: "Or enter custom amount (₹)",
          name: "Your Name",
          namePlaceholder: "Full name",
          email: "Email",
          phone: "Phone",
          note: "This is a UI-only form. No payment is processed. For actual donations, please contact us.",
          submit: "Proceed to Donate"
        },
        thankYou: { title: "Thank You!", description: "Your donation intent has been recorded. We will reach out for payment details. This is a UI-only form—no backend connected.", back: "Back to Home" }
      },
      volunteer: {
        hero: { subtitle: "Join us as a volunteer and make a direct impact in education and women empowerment." },
        opps: {
          title: "Volunteer Opportunities",
          education: "Education Support",
          educationDesc: "Help with teaching, coaching, or educational materials for underprivileged children.",
          women: "Women Skill Development",
          womenDesc: "Support the skill development center—training, logistics, or connecting with local brands.",
          events: "Events & Outreach",
          eventsDesc: "Help organize events, awareness drives, and community outreach."
        },
        form: { title: "Express Your Interest", name: "Name", email: "Email", phone: "Phone", message: "How would you like to help?", submit: "Submit" },
        thankYou: { title: "Thank You!", description: "We have received your interest. Our team will get in touch with you soon.", back: "Back to Home" }
      }
    }
  },
  hi: {
    translation: {
      siteName: "चाहत वेलफेयर फाउंडेशन",
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        programs: "हमारे कार्यक्रम",
        education: "शिक्षा सहायता",
        women: "महिला कौशल विकास",
        impact: "प्रभाव",
        gallery: "गैलरी",
        involved: "जुड़ें",
        donate: "दान करें",
        volunteer: "स्वयंसेवक",
        contact: "संपर्क करें",
        language: "भाषा"
      },
      header: {
        whoWeAre: "हम कौन हैं",
        whatWeDo: "हम क्या करते हैं",
        newsStories: "समाचार और गैलरी",
        howToHelp: "कैसे मदद करें",
        visionMission: "विजन और मिशन"
      },
      hero: {
        title: "वंचित समुदायों के लिए समावेशन",
        subtitle:
          "वित्तीय और नैतिक सहायता तथा कौशल विकास के माध्यम से गुणवत्तापूर्ण शिक्षा और महिला सशक्तिकरण।",
        ctaDonate: "दान करें",
        ctaVolunteer: "स्वयंसेवा"
      },
      home: {
        hero: { narrative: "चाहत वेलफेयर फाउंडेशन", primaryCause: "वंचित समुदायों के लिए समावेशन — वित्तीय और नैतिक सहायता तथा कौशल विकास के माध्यम से गुणवत्तापूर्ण शिक्षा और महिला सशक्तिकरण।" },
        howWeWork: {
          title: "हम कैसे बदलाव लाते हैं",
          education: "शिक्षा सहायता",
          women: "महिला कौशल विकास",
          impact: "हमारा प्रभाव",
          involved: "जुड़ें"
        },
        impactStories: { title: "प्रभाव कहानियाँ" },
        stories: {
          story1: { title: "संघर्ष से स्कूल तक: एक बच्चे की यात्रा", desc: "चाहत वेलफेयर फाउंडेशन की वित्तीय सहायता और निजी कोचिंग से जयपुर के एक छात्र ने बाधाओं को पार किया और अब पढ़ाई में उत्कृष्ट है।" },
          story2: { title: "एक नए भविष्य की सिलाई", desc: "हमारे कौशल विकास केंद्र की एक महिला अब स्थानीय ब्रांडों के लिए एथनिक वियर सिलती है—100% लाभ उसे मिलता है।" },
          story3: { title: "शिक्षा और गरिमा साथ", desc: "हमारे शिक्षा और नैतिक सहायता कार्यक्रम ने सैकड़ों वंचित बच्चों को स्कूल में रहने और बड़े सपने देखने में मदद की है।" }
        },
        readMore: "और पढ़ें...",
        readMoreAbout: "और पढ़ें",
        foundationBlock: {
          title: "चाहत वेलफेयर फाउंडेशन",
          desc: "चाहत वेलफेयर फाउंडेशन समाज के वंचित वर्गों के लिए समावेशन की एक पहल है। हम वित्तीय और नैतिक सहायता, निजी कोचिंग और आंशिक फीस फंडिंग के माध्यम से वंचित और पीड़ित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करते हैं। हमारा कौशल विकास केंद्र महिलाओं को एथनिक वियर और कॉटन बैग उत्पादन के माध्यम से सशक्त बनाता है—100% लाभ उन्हें मिलता है।",
          vision: "हमारी दृष्टि",
          visionText: "कोई भी बच्चा भारत में वंचितता के कारण शिक्षा से वंचित न रहे। हर महिला को गरिमा के साथ कमाने का अवसर मिले।",
          mission: "हमारा मिशन",
          missionText: "वित्तीय और नैतिक सहायता के साथ वंचित बच्चों को गुणवत्तापूर्ण शिक्षा और महिलाओं को कौशल विकास के माध्यम से सशक्त बनाना।"
        },
        stats: { founded: "स्थापित", children: "बच्चों की मदद", women: "महिलाएं सशक्त", volunteers: "स्वयंसेवक" },
        campaigns: {
          title: "अभियान",
          c1: { title: "एक बच्चे की शिक्षा का संरक्षण करें" },
          c2: { title: "महिला कौशल केंद्र विस्तार" },
          c3: { title: "शिक्षा और आजीविका फंड" }
        },
        testimonials: {
          title: "हमारे योगदानकर्ताओं से सुनें",
          t1: "चाहत वेलफेयर फाउंडेशन का शिक्षा और महिला सशक्तिकरण में काम गहरा प्रभाव डालता है। उनका समर्थन करना एक विशेषाधिकार रहा।",
          t1Name: "एक समर्थक",
          t1Role: "दाता",
          t2: "कौशल विकास केंद्र महिलाओं को केवल आय ही नहीं बल्कि गरिमा देता है। प्रतिभागियों को 100% लाभ का मॉडल अनुकरणीय है।",
          t2Name: "एक साझेदार",
          t2Role: "सीएसआर साझेदार"
        },
        updates: {
          title: "नवीनतम अपडेट",
          u1: "कौशल विकास केंद्र नए स्थानीय ब्रांडों के साथ साझेदारी करता है",
          u2: "शिक्षा सहायता कार्यक्रम 500+ बच्चों के माइलस्टोन तक पहुँचा",
          u3: "जयपुर में महिला सशक्तिकरण कार्यशाला"
        },
        education: { title: "शिक्षा सहायता", description: "वित्तीय और नैतिक सहायता के माध्यम से वंचित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करना।" },
        women: { title: "महिला कौशल विकास", description: "कौशल विकास केंद्रों के माध्यम से महिलाओं को सशक्त बनाना।" },
        impact: { title: "हमारा प्रभाव", description: "समर्पित कार्यक्रमों के माध्यम से जीवन और समुदायों को बदलना।" },
        learnMore: "और जानें",
        about: { title: "चाहत वेलफेयर फाउंडेशन के बारे में", description: "2017 में स्थापित, चाहत वेलफेयर फाउंडेशन समाज के वंचित वर्गों के लिए समावेशन की एक पहल है।" },
        readMoreLegacy: "हमारे बारे में और पढ़ें",
        cta: { title: "बदलाव लाने में हमसे जुड़ें", description: "आपका समर्थन जीवन बदल सकता है।" }
      },
      footer: {
        cta: "दूसरों के जीवन में बदलाव लाने का सबसे अच्छा तरीका",
        tagline: "शिक्षा और महिला सशक्तिकरण के माध्यम से वंचित समुदायों के लिए समावेशन की पहल।",
        onlineDonations: "ऑनलाइन दान",
        getInTouch: "संपर्क करें",
        newsletter: "ई-न्यूज़लेटर सब्सक्राइब करें",
        subscribe: "सब्सक्राइब"
      },
      contact: {
        phoneLabel: "फ़ोन",
        phone: "7211155790",
        headquarters: "जयपुर, राजस्थान",
        founded: "स्थापित 2017",
        industry: "गैर-लाभकारी संगठन",
        companySize: "कंपनी आकार 11-50 कर्मचारी",
        hero: { subtitle: "दान, स्वयंसेवा, साझेदारी या किसी भी पूछताछ के लिए संपर्क करें।" },
        info: {
          address: { title: "मुख्यालय" },
          industry: "उद्योग"
        },
        form: {
          title: "संदेश भेजें",
          name: "नाम",
          email: "ईमेल",
          phone: "फ़ोन",
          message: "संदेश",
          submit: "संदेश भेजें"
        },
        thankYou: {
          title: "संदेश भेज दिया गया!",
          description: "हम जल्द ही आपसे संपर्क करेंगे।",
          back: "होम पर वापस"
        }
      },
      education: {
        hero: { subtitle: "वित्तीय और नैतिक सहायता के माध्यम से वंचित और पीड़ित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करना।" },
        whatWeOffer: { title: "हम क्या देते हैं" },
        offerings: {
          coaching: "वंचित बच्चों के लिए निजी कोचिंग",
          moral: "नैतिक और भावनात्मक सहायता",
          partialFees: "आंशिक स्कूल फीस फंडिंग"
        },
        bullet1: "वंचित बच्चों के लिए निजी कोचिंग",
        bullet2: "आंशिक स्कूल फीस फंडिंग",
        bullet3: "वित्तीय और नैतिक सहायता",
        bullet4: "शैक्षिक सामग्री और आपूर्ति",
        cta: { title: "शिक्षा का समर्थन करें", description: "आपका दान हमें अधिक बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करने में मदद करता है।" }
      },
      women: {
        hero: { subtitle: "हमारा कौशल विकास केंद्र जहाँ महिलाएं स्थानीय ब्रांडों के लिए एथनिक वियर और कॉटन बैग सिलती हैं। 100% लाभ उन्हें मिलता है।" },
        highlights: {
          title: "हम क्या करते हैं",
          ethnic: { title: "एथनिक वियर", desc: "महिलाओं को स्थानीय ब्रांडों के लिए एथनिक वियर सिलने का प्रशिक्षण दिया जाता है।" },
          bags: { title: "कॉटन बैग", desc: "स्थानीय ब्रांडों और बाजारों के लिए कॉटन बैग का उत्पादन।" },
          profit: { title: "100% लाभ महिलाओं को", desc: "बिक्री से होने वाला पूरा लाभ महिला प्रतिभागियों को मिलता है।" }
        },
        bullet1: "एथनिक वियर के लिए सिलाई प्रशिक्षण",
        bullet2: "स्थानीय ब्रांडों के लिए कॉटन बैग उत्पादन",
        bullet3: "पूरा लाभ प्रतिभागी महिलाओं को",
        bullet4: "टिकाऊ आजीविका और वित्तीय स्वावलंबन",
        cta: { title: "महिला सशक्तिकरण का समर्थन करें", description: "हमारे कौशल विकास केंद्र का विस्तार करने के लिए दान करें या साझेदार बनें।" }
      },
      impact: {
        hero: { title: "हमारा प्रभाव", subtitle: "2017 से शिक्षा और महिला सशक्तिकरण के माध्यम से जीवन और समुदायों को बदलना।" },
        stats: {
          founded: "स्थापित",
          children: "बच्चों को सहायता",
          women: "महिलाएं सशक्त",
          team: "टीम का आकार"
        },
        areas: {
          title: "प्रभाव के क्षेत्र",
          education: { title: "शिक्षा सहायता", desc: "वित्तीय सहायता, निजी कोचिंग और आंशिक फीस फंडिंग के माध्यम से वंचित बच्चों के लिए गुणवत्तापूर्ण शिक्षा।" },
          women: { title: "महिला कौशल विकास", desc: "महिलाओं के लिए कौशल विकास केंद्र—स्थानीय ब्रांडों के लिए एथनिक वियर और कॉटन बैग, 100% लाभ प्रतिभागियों को।" },
          community: { title: "समुदाय और समावेशन", desc: "समाज के वंचित वर्गों के लिए समावेशन की पहल, मुख्यालय जयपुर, राजस्थान।" }
        },
        cta: { title: "हमारा काम देखें", description: "हमारी गैलरी देखें और जुड़ें।" }
      },
      gallery: {
        hero: { subtitle: "हमारे कार्यक्रमों, शिक्षा पहलों और महिला कौशल विकास केंद्र के पल।" },
        education: "शिक्षा",
        women: "महिला कौशल विकास",
        community: "समुदाय",
        events: "कार्यक्रम",
        programs: "प्रोग्राम",
        general: "सामान्य",
        placeholder: "फोटो गैलरी जल्द आ रही है"
      },
      involved: {
        hero: { subtitle: "आपका समर्थन जीवन बदल सकता है। दान करें, स्वयंसेवा करें या शब्द फैलाएं।" },
        ways: {
          title: "जुड़ने के तरीके",
          donate: { title: "दान करें", desc: "आपका वित्तीय योगदान हमें शिक्षा और महिला कौशल विकास कार्यक्रम चलाने में मदद करता है।" },
          volunteer: { title: "स्वयंसेवक", desc: "शिक्षा और महिला सशक्तिकरण का समर्थन करने के लिए अपना समय और कौशल दें।" },
          spread: { title: "शब्द फैलाएं", desc: "हमारे मिशन को साझा करें और हमें साझेदारों और लाभार्थियों से जोड़ें।" }
        },
        learnMore: "और जानें",
        cta: { title: "प्रश्न हैं?", description: "साझेदारी या पूछताछ के लिए हमसे संपर्क करें।" }
      },
      donate: {
        hero: { subtitle: "आपका योगदान हमें शिक्षा प्रदान करने और महिलाओं को सशक्त बनाने में मदद करता है। हर रुपया मायने रखता है।" },
        form: {
          title: "अपनी दान राशि चुनें",
          preset: "त्वरित चयन (₹)",
          custom: "या कस्टम राशि दर्ज करें (₹)",
          name: "आपका नाम",
          namePlaceholder: "पूरा नाम",
          email: "ईमेल",
          phone: "फ़ोन",
          note: "यह केवल UI फॉर्म है। कोई भुगतान संसाधित नहीं होता। वास्तविक दान के लिए कृपया हमसे संपर्क करें।",
          submit: "दान के लिए आगे बढ़ें"
        },
        thankYou: { title: "धन्यवाद!", description: "आपके दान का इरादा दर्ज कर लिया गया है। हम भुगतान विवरण के लिए संपर्क करेंगे। यह केवल UI फॉर्म है—कोई बैकएंड जुड़ा नहीं।", back: "होम पर वापस" }
      },
      volunteer: {
        hero: { subtitle: "स्वयंसेवक के रूप में जुड़ें और शिक्षा और महिला सशक्तिकरण में सीधा प्रभाव डालें।" },
        opps: {
          title: "स्वयंसेवा के अवसर",
          education: "शिक्षा सहायता",
          educationDesc: "वंचित बच्चों के लिए पढ़ाने, कोचिंग या शैक्षिक सामग्री में मदद करें।",
          women: "महिला कौशल विकास",
          womenDesc: "कौशल विकास केंद्र का समर्थन करें—प्रशिक्षण, लॉजिस्टिक्स या स्थानीय ब्रांडों से जुड़ना।",
          events: "कार्यक्रम और आउटरीच",
          eventsDesc: "कार्यक्रमों, जागरूकता अभियानों और समुदाय आउटरीच को व्यवस्थित करने में मदद करें।"
        },
        form: { title: "अपनी रुचि व्यक्त करें", name: "नाम", email: "ईमेल", phone: "फ़ोन", message: "आप कैसे मदद करना चाहेंगे?", submit: "जमा करें" },
        thankYou: { title: "धन्यवाद!", description: "हमने आपकी रुचि प्राप्त कर ली है। हमारी टीम जल्द ही संपर्क करेगी।", back: "होम पर वापस" }
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
