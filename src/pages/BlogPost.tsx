import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Clock, User, Calendar, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Mock blog data - in production, this would come from a CMS
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  image: string;
  tags: string[];
}> = {
  "benefits-of-extracurricular-activities": {
    title: "Çocuklar İçin Okul Dışı Aktivitelerin 10 Faydası",
    excerpt: "Okul dışı aktivitelerin çocuğunuzun özgüvenini, sosyal becerilerini ve akademik performansını nasıl artırabileceğini keşfedin.",
    content: `
      <p>Okul dışı aktiviteler, bir çocuğun genel gelişiminde kritik bir rol oynar. Akademik eğitim temel oluştursa da, sınıf dışı aktiviteler çocukların yetişkinliğe kadar işlerine yarayacak temel yaşam becerilerini geliştirmelerine yardımcı olur.</p>
      
      <h2>1. Gelişmiş Akademik Performans</h2>
      <p>Okul dışı aktivitelerin çalışmaktan zaman çaldığı endişelerinin aksine, araştırmalar tutarlı bir şekilde yapılandırılmış aktivitelere katılan çocukların genellikle akademik olarak daha iyi performans gösterdiğini ortaya koymaktadır. Bu aktiviteler zaman yönetimi öğretir ve çocukların daha iyi odaklanma ve konsantrasyon geliştirmelerine yardımcı olur.</p>
      
      <h2>2. Sosyal Beceri Gelişimi</h2>
      <p>Takım sporları, grup müzik dersleri ve işbirlikçi sanat projeleri, çocukların sınıf ortamı dışında akranlarıyla etkileşim kurmaları için mükemmel fırsatlar sunar. İletişim kurmayı, işbirliği yapmayı ve yapıcı yollarla çatışmaları çözmeyi öğrenirler.</p>
      
      <h2>3. Özgüven Oluşturma</h2>
      <p>İster gol atmak ister bir resitalde sahne almak olsun, yeni bir beceriyi ustalaşmak muazzam özgüven inşa eder. Bu başarı duygusu, akademik ve sosyal durumlar dahil olmak üzere hayatın diğer alanlarına da yansır.</p>
      
      <h2>4. Fiziksel Sağlık Faydaları</h2>
      <p>Spor, dans ve dövüş sanatları gibi aktif okul dışı aktiviteler, çocukların erken yaşta sağlıklı alışkanlıklar geliştirmelerine yardımcı olur. Düzenli fiziksel aktivite, obezite ve buna bağlı sağlık sorunları riskini azaltır.</p>
      
      <h2>5. Stres Azaltma</h2>
      <p>Aktiviteler stres ve kaygı için sağlıklı bir çıkış noktası sağlar. Özellikle sanat ve müzik gibi yaratıcı uğraşların kortizol seviyelerini düşürdüğü ve duygusal refahı teşvik ettiği gösterilmiştir.</p>
      
      <h2>6. Zaman Yönetimi Becerileri</h2>
      <p>Ödev, aktiviteler ve boş zamanı dengelemek çocuklara değerli organizasyon becerileri öğretir. Önceliklendirmeyi ve programlarını etkili bir şekilde yönetmeyi öğrenirler.</p>
      
      <h2>7. İlgi Alanlarını ve Yetenekleri Keşfetme</h2>
      <p>Okul dışı aktiviteler, çocuklara farklı ilgi alanlarını keşfetme ve gizli yeteneklerini ortaya çıkarma şansı verir. Bu keşif, kimlik duygusu ve gelecekteki kariyer ilgi alanlarının geliştirilmesi için çok önemlidir.</p>
      
      <h2>8. Dayanıklılık Öğrenme</h2>
      <p>Her antrenman mükemmel gitmez ve her yarışma kazanılmaz. Bu deneyimler çocuklara hayal kırıklığıyla nasıl başa çıkacaklarını, hatalardan ders çıkarmayı ve denemeye devam etmeyi öğretir.</p>
      
      <h2>9. Liderlik Fırsatları</h2>
      <p>Birçok aktivite, ister takım kaptanı olmak, ister grupta bir bölüme liderlik etmek veya daha genç katılımcılara mentorluk yapmak olsun, doğal liderlik fırsatları sunar.</p>
      
      <h2>10. Üniversite ve Kariyer Hazırlığı</h2>
      <p>Okul dışı aktivitelere katılım, üniversite kabul görevlilerine ve gelecekteki işverenlere bağlılık, tutku ve çok yönlülük gösterir.</p>
      
      <h2>Başlarken</h2>
      <p>Anahtar, çocuğunuzun ilgi alanlarına ve programına uygun aktiviteler bulmaktır. Aşırıya kaçmayın – kalite miktardan daha önemlidir. Çocuğunuzun aktivitelerini seçerken söz hakkına sahip olmasına izin verin ve destekleyici olun ama zorlamayın.</p>
    `,
    category: "Ebeveyn İpuçları",
    author: "Dr. Elif Demir",
    authorRole: "Çocuk Gelişimi Uzmanı",
    readTime: "5 dk okuma",
    date: "2024-01-15",
    image: "🎯",
    tags: ["ebeveynlik", "çocuk gelişimi", "aktiviteler", "eğitim"],
  },
  "choosing-right-sport-for-your-child": {
    title: "Çocuğunuz İçin Doğru Sporu Nasıl Seçersiniz?",
    excerpt: "Çocuğunuzun ilgi alanlarını ve yeteneklerini mükemmel sporla eşleştirmek için kapsamlı bir rehber.",
    content: `
      <p>Çocuğunuz için doğru sporu seçmek, onları yıllarca sürecek keyif ve sağlıklı alışkanlıklar için hazırlayabilir. İşte mükemmel eşleşmeyi nasıl bulacağınız.</p>
      
      <h2>Çocuğunuzun Kişiliğini Düşünün</h2>
      <p>Çocuğunuz doğal olarak rekabetçi mi yoksa daha işbirlikçi mi? Takım ortamlarında mı gelişiyor yoksa bireysel başarıyı mı tercih ediyor? Çocuğunuzun kişiliğini anlamak, seçenekleri daraltmaya yardımcı olur.</p>
      
      <h2>Yaşa Uygun Aktiviteler</h2>
      <p>Küçük çocuklar (3-5 yaş) temel motor becerilere odaklanan aktivitelerden faydalanır. Çocuklar büyüdükçe daha karmaşık kurallar ve stratejilerle başa çıkabilirler. Rekabetçi sporları tanıtmak için 6-8 yaşına kadar bekleyin.</p>
      
      <h2>Fiziksel Değerlendirmeler</h2>
      <p>Her çocuğun farklı fiziksel güçlü yönleri vardır. Bazıları dayanıklılık gerektiren aktivitelerde başarılı olabilirken, diğerleri hızlı enerji patlamaları veya esneklik gerektiren sporlar için daha uygun olabilir.</p>
      
      <h2>Taahhüt Etmeden Önce Deneyin</h2>
      <p>Birçok program deneme dersleri sunar. Uzun vadeli bir taahhütte bulunmadan önce çocuğunuzun farklı aktiviteleri deneyimlemesine izin vermek için bunlardan yararlanın.</p>
    `,
    category: "Spor",
    author: "Antrenör Ahmet Yılmaz",
    authorRole: "Gençlik Sporları Direktörü",
    readTime: "7 dk okuma",
    date: "2024-01-10",
    image: "⚽",
    tags: ["spor", "çocuk sporları", "fiziksel aktivite", "aktivite seçimi"],
  },
};

const relatedPosts = [
  {
    slug: "stem-activities-at-home",
    title: "Evde Yapabileceğiniz Eğlenceli STEM Aktiviteleri",
    category: "STEM",
    image: "🔬",
  },
  {
    slug: "importance-of-creative-play",
    title: "Yaratıcı Oyunun Önemi",
    category: "Gelişim",
    image: "🎨",
  },
  {
    slug: "summer-camp-preparation-guide",
    title: "Yaz Kampı Hazırlık Rehberi",
    category: "Yaz",
    image: "🏕️",
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Bağlantı panoya kopyalandı!");
  };

  const handleSave = () => {
    toast.success("Makale kaydedildi!", {
      description: "Kaydedilen makalelerinize profilinizden erişebilirsiniz."
    });
  };

  if (!post) {
    return (
      <Layout>
        <SEOHead
          title="Yazı Bulunamadı"
          description="Aradığınız blog yazısı mevcut değil."
        />
        <div className="section-padding container-width text-center py-24">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Yazı Bulunamadı
          </h1>
          <p className="text-muted-foreground mb-8">
            Aradığınız makale mevcut değil.
          </p>
          <Button asChild>
            <Link to="/blog">Bloga Dön</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${slug}`}
        ogType="article"
        article={{
          publishedTime: post.date,
          author: post.author,
          tags: post.tags,
        }}
      />

      {/* Article Header */}
      <article>
        <header className="bg-gradient-to-b from-teal-light/20 to-background section-padding py-12 md:py-16">
          <div className="container-width max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft size={18} />
              Bloga Dön
            </Link>

            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {post.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm">{post.authorRole}</p>
                </div>
              </div>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString("tr-TR", { 
                  year: "numeric", 
                  month: "long", 
                  day: "numeric" 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>

            {/* Share buttons */}
            <div className="flex gap-3 mt-8">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 size={16} />
                Paylaş
              </Button>
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Bookmark size={16} />
                Kaydet
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container-width max-w-4xl py-8">
          <div className="aspect-video bg-gradient-to-br from-coral-light/30 to-teal-light/30 rounded-3xl flex items-center justify-center">
            <span className="text-9xl">{post.image}</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="container-width max-w-3xl section-padding py-8">
          <div
            className="prose prose-lg max-w-none 
              prose-headings:font-display prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4">Etiketler:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="section-padding bg-muted/50">
          <div className="container-width">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              İlgili Makaleler
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
                >
                  <div className="aspect-video bg-gradient-to-br from-coral-light/30 to-teal-light/30 flex items-center justify-center">
                    <span className="text-5xl">{related.image}</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-secondary font-medium">
                      {related.category}
                    </span>
                    <h3 className="font-display font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
