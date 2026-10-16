export interface LampModel {
  id: 'stone' | 'wooden_basket';
  name: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  keyFeatures: string[];
  advantages: { title: string; desc: string }[];
  specifications: { label: string; value: string }[];
  idealLocation: string;
}

export const LAMP_MODELS: Record<'stone' | 'wooden_basket', LampModel> = {
  stone: {
    id: 'stone',
    name: 'Təbii Qaya Daş Duz Lampası',
    badge: '1-ci Növ • Monolit Daş',
    tagline: 'Məğrur təbiətin evinizdəki isti işıq və şəfa mənbəyi',
    description: 'Naxçıvan Duzdağ mədənlərindən çıxarılan təbii, xam monolit qaya duzundan əllə yonularaq hazırlanır. Hər bir daşın forması tamamilə unikal və təkraredilməzdir.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      '100% təbii monolit Duzdağ qaya daşı',
      'Unikal təbii forma və damarlı rəng tonları',
      'Gücləndirilmiş taxta və ya qranit dayaq altlığı',
      'Təhlükəsiz tənzimlənən elektrik kabeli və lampa'
    ],
    advantages: [
      { title: 'Təbii Estetika', desc: 'Hər bir lampa təbiətin öz əli ilə yaratdığı unikal sənət əsəridir.' },
      { title: 'Dərin İonlaşma', desc: 'Monolit qaya strukturu sayəsində havada mənfi ionları maksimum səviyyədə artırır.' }
    ],
    specifications: [
      { label: 'Mənşə', value: 'Naxçıvan Duzdağ Mədəni' },
      { label: 'Material', value: 'Təbii Qaya Duzu və Taxta Altlıq' },
      { label: 'Çəki Aralığı', value: '2.5 kg - 5.0 kg (modellərə görə)' },
      { label: 'İstifadə sahəsi', value: 'Yataq otağı, qonaq otağı, iş masası' }
    ],
    idealLocation: 'Yataq otağında komodin üzərində və ya qonaq otağında masanın mərkəzində yerləşdirmək idealdır.'
  },
  wooden_basket: {
    id: 'wooden_basket',
    name: 'Əl İşi Taxta Səbət Duz Lampası',
    badge: '2-ci Növ • Səbət Dizayn',
    tagline: 'Zərif əl işi taxta səbət içində təbii duz kristalları',
    description: 'Xüsusi ustalıqla toxunmuş və ya yığılmış taxta səbət içərisinə yerləşdirilmiş təbii duz parçalarından ibarətdir. Müasir interyerlərə xüsusi isti və estetik ab-hava qatır.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Dekorativ və möhkəm əl işi taxta səbət',
      'İçərisində seçilmiş parça duz kristalları',
      'İsti işıq süzülmə effekti',
      'Asan təmizlənən və daşınan struktur'
    ],
    advantages: [
      { title: 'Müasir Dizayn', desc: 'Klassik daş görünüşünü sevмяnlər üçün daha modern və şık alternativ.' },
      { title: 'Təhlükəsiz Korpus', desc: 'Taxta səbət sayəsində səthlərə daha rahat uyğunlaşır.' }
    ],
    specifications: [
      { label: 'Mənşə', value: 'Naxçıvan Duzdağ Qayaları' },
      { label: 'Material', value: 'Təbii Taxta Səbət + Xırda/Orta Duz Parçaları' },
      { label: 'Çəki', value: 'Təxminən 2.0 kg - 4.0 kg' },
      { label: 'İstifadə sahəsi', value: 'Ofis, salon, koridor və ya dekorativ rəf' }
    ],
    idealLocation: 'Ofis masalarında, kitab rəflərində və ya salon guşələrində yerləşdirmək məsləhətdir.'
  }
};

export const HEALTH_BENEFITS = [
  {
    id: '1',
    title: 'Havanın Təbii Təmizlənməsi',
    description: 'Havada olan toz, allergen və mikroskopik zərrəcikləri neytrallaşdıraraq daha təmiz nəfəs almağınıza kömək edir.',
    icon: 'Wind'
  },
  {
    id: '2',
    title: 'Mənfi İon Balansı',
    description: 'Elektronika cihazlarının yaydığı müsbət ionları tarazlaşdıraraq evdəki havanın təbii dağ havası kimi təmiz qalmasını təmin edir.',
    icon: 'Zap'
  },
  {
    id: '3',
    title: 'Rahat və Keyfiyyətli Yuxu',
    description: 'Yataq otağında yayılan yumşaq isti işıq və ionlaşmış hava sinir sistemini sakitləşdirir, dərin yuxuya getməyi asanlaşdırır.',
    icon: 'Moon'
  },
  {
    id: '4',
    title: 'Stresin Azaldılması',
    description: 'Günün yorğunluğunu və gərginliyini atmağa kömək edən rahatlaşdırıcı təbii ab-hava yaradır.',
    icon: 'HeartHandshake'
  },
  {
    id: '5',
    title: 'Nəfəs Yollarına Dəstək',
    description: 'Naxçıvan Duzdağın məşhur mikroiqlim təsirini ev şəraitinə daşıyaraq tənəffüs yollarının rahatlaşmasına müsbət təsir göstərir.',
    icon: 'ShieldCheck'
  },
  {
    id: '6',
    title: 'Unikal Estetik İşıq',
    description: 'Məkana xüsusi sakitlik və lüks qatан təbii kəhrəba rəngli isti işıq parıltısı bəxş edir.',
    icon: 'Sparkles'
  }
];
2
