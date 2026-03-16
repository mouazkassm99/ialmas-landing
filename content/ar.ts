import type { SiteContent } from "./types";

const ar: SiteContent = {
  navLinks: [
    { label: "من نحن", href: "#about" },
    { label: "الحلول", href: "#solutions" },
    { label: "الشركاء", href: "#vendors" },
    { label: "تواصل معنا", href: "#contact" },
  ],
  hero: {
    headline: "التحول الرقمي الآمن بحلول الأمن السيبراني الموثوقة",
    subheadline:
      "تساعد iAlmas المنظمات على اكتشاف تقنيات الأمن السيبراني المجربة واعتمادها من خلال منظومة موزعين موثوقة وخبرة متخصصة ذات قيمة مضافة.",
    primaryCta: "تواصل معنا",
    secondaryCta: "استكشف الشركاء",
    trustChips: ["موزع ذو قيمة مضافة", "أمن المؤسسات", "موردون موثوقون", "دعم إقليمي"],
  },
  trustSection: {
    label: "من نحن",
    title: "شريكك الموثوق في الأمن السيبراني",
    description:
      "iAlmas موزع ذو قيمة مضافة ومزود حلول أمن سيبراني يدعم التحول الرقمي الآمن في المنطقة.",
    cards: [
      {
        icon: "shield",
        title: "حلول الأمن السيبراني",
        description:
          "نتيح الوصول إلى أفضل تقنيات الأمان في فئتها، تشمل حماية النقاط الطرفية والبيانات والأجهزة المحمولة والشبكات.",
      },
      {
        icon: "network",
        title: "منظومة موردين موثوقة",
        description:
          "نتشارك مع كبار مزودي الأمن السيبراني عالمياً لنوصل حلولاً مُتحقَّقاً منها مباشرةً إلى مؤسستك.",
      },
      {
        icon: "briefcase",
        title: "خبرة جاهزة للمؤسسات",
        description:
          "يمتلك فريقنا معرفة عميقة بالمجال لمساعدتك في تقييم حلول الأمان ونشرها وتشغيلها بثقة تامة.",
      },
      {
        icon: "map",
        title: "دعم إقليمي",
        description:
          "قدرات دعم وتوزيع مخصصة تلبيةً لاحتياجات الشركات في جميع أنحاء المنطقة.",
      },
    ],
  },
  solutionsSection: {
    label: "قدراتنا",
    title: "حلول أمنية لكل طبقة",
    description:
      "نجمع بين التقنيات المجربة لمعالجة الطيف الكامل من تحديات الأمن السيبراني للمؤسسات.",
    items: [
      {
        icon: "monitor",
        title: "حماية النقاط الطرفية",
        description:
          "احمِ أجهزتك من البرامج الضارة وبرامج الفدية والتهديدات الجديدة بحلول أمان متطورة للنقاط الطرفية.",
      },
      {
        icon: "lock",
        title: "أمن البيانات",
        description:
          "احمِ البيانات الحساسة وامنع تسربها غير المصرح به بحلول DLP على مستوى المؤسسات.",
      },
      {
        icon: "smartphone",
        title: "أمن الأجهزة المحمولة",
        description:
          "أمِّن أجهزة الشركات المحمولة وبيئات العمل المؤسسي دون التأثير على الإنتاجية.",
      },
      {
        icon: "key",
        title: "الوصول الآمن",
        description:
          "طبِّق ضوابط الوصول المبنية على الثقة المعدومة وأمِّن محيط الشبكة بحلول اتصال موثوقة.",
      },
      {
        icon: "radar",
        title: "الكشف عن التهديدات والاستجابة لها",
        description:
          "اكشف التهديدات وحقِّق فيها واستجب لها فورياً عبر خدمات EDR والأمن المُدار.",
      },
      {
        icon: "building",
        title: "توزيع الأمن السيبراني للمؤسسات",
        description:
          "شريك موثوق واحد للشراء والنشر والدعم المستمر لمنظومة الأمان الخاصة بك.",
      },
    ],
  },
  vendorsSection: {
    label: "منظومة الشراكة",
    title: "موردون موثوقون، تقنيات مجربة",
    description:
      "نعمل مع كبار مزودي الأمن السيبراني عالمياً لتقديم حلول مُتحقَّق منها في جميع مجالات الأمان.",
    items: [
      {
        name: "Xcitium",
        logo: "/logos/logo-xcitium.svg",
        url: "https://www.xcitium.com/",
        description: "حلول حماية النقاط الطرفية والأمن المبني على الثقة المعدومة",
      },
      {
        name: "Zecurion",
        logo: "/logos/zecurion-logo.png",
        url: "https://zecurion.com/",
        description: "حلول أمن البيانات ومنع تسرب المعلومات",
      },
      {
        name: "Blinkly",
        logo: "/logos/Blinkly.svg",
        url: "https://blinkly.com/",
        description: "حلول رقمية أمنية وأدوات رصد ومراقبة متطورة",
      },
      {
        name: "SyncDog",
        logo: "/logos/syncdog-logo-screenshot.png",
        url: "https://www.syncdog.com/",
        description: "أمن الأجهزة المحمولة وتقنية بيئة العمل المؤسسي الآمن",
      },
      {
        name: "Protelion",
        logo: "/logos/protelion-logo.svg",
        url: "https://protelion.com/",
        description: "الوصول الآمن إلى الشبكات وحماية الاتصالات على مستوى المؤسسات",
      },
      {
        name: "Viettel Cyber Security",
        logo: "/logos/viettelsecurity-logo.svg",
        url: "https://viettelsecurity.com/",
        description: "الكشف عن التهديدات وخدمات EDR والأمن السيبراني",
      },
    ],
  },
  whySection: {
    label: "لماذا نحن",
    title: "ابدأ المحادثة الآن",
    description:
      "تواصل مع فريق iAlmas اليوم واعثر على حل الأمان المناسب لمؤسستك.",
    cta: "تواصل مع iAlmas",
    items: [
      {
        num: "01",
        title: "اكتشف المجموعة الأمنية المناسبة",
        description:
          "اكتشف حلول الأمن السيبراني المصممة خصيصاً لبيئة مخاطر مؤسستك ومتطلباتها.",
      },
      {
        num: "02",
        title: "شريك واحد، موردون كثيرون",
        description:
          "تواصل مع كبار الموردين العالميين من خلال شريك توزيع موثوق ذو خبرة عالية.",
      },
      {
        num: "03",
        title: "ابدأ المحادثة اليوم",
        description:
          "فريقنا حاضر في المعرض — تواصل معنا الآن أو أرسل بياناتك لمتابعة لاحقة.",
      },
    ],
  },
  contactSection: {
    label: "تواصل معنا",
    title: "تواصل مع iAlmas",
    description: "أدخل بياناتك وسيتصل بك أحد أعضاء فريقنا في أقرب وقت ممكن.",
    directContact: "التواصل المباشر",
    contactLabels: {
      email: "البريد الإلكتروني",
      phone: "الهاتف / واتساب",
      website: "الموقع الإلكتروني",
      linkedin: "iAlmas على لينكد إن",
    },
    fields: {
      fullName: "الاسم الكامل *",
      company: "اسم الشركة",
      email: "البريد الإلكتروني *",
      phone: "الهاتف / واتساب",
      interest: "الاهتمام / الحل المطلوب",
      message: "رسالتك *",
      submit: "إرسال الرسالة",
    },
    solutionOptions: [
      "حماية النقاط الطرفية",
      "أمن البيانات",
      "أمن الأجهزة المحمولة",
      "الوصول الآمن",
      "الكشف عن التهديدات والاستجابة لها",
      "توزيع المؤسسات",
      "استفسار عام",
    ],
    errors: {
      fullName: "الاسم الكامل مطلوب",
      emailRequired: "البريد الإلكتروني مطلوب",
      emailInvalid: "أدخل عنوان بريد إلكتروني صحيح",
      message: "الرسالة مطلوبة",
    },
    success: {
      title: "تم استلام رسالتك",
      message: "شكراً لتواصلك. سيتصل بك فريق iAlmas قريباً.",
      again: "إرسال رسالة أخرى",
    },
  },
  footer: {
    description:
      "موزع أمن سيبراني ذو قيمة مضافة يساعد المنظمات على اعتماد تقنيات الأمان المجربة من خلال منظومة شركاء موثوقة.",
    links: [
      {
        label: "الشركة",
        links: [
          { label: "من نحن iAlmas", href: "#about" },
          { label: "حلولنا", href: "#solutions" },
          { label: "موردو الشراكة", href: "#vendors" },
        ],
      },
      {
        label: "تواصل",
        links: [
          { label: "اتصل بنا", href: "#contact" },
          { label: "لينكد إن", href: "https://www.linkedin.com/company/ialmas" },
          { label: "الموقع الإلكتروني", href: "https://www.ialmas.com" },
        ],
      },
    ],
  },
  sticky: {
    contactUs: "تواصل معنا",
    viewPartners: "عرض الشركاء",
  },
};

export default ar;
