import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { NewsArticle } from '../lib/types';
import NewsCard from './NewsCard';
import { Newspaper, AlertCircle } from 'lucide-react';

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const { data, error: queryError } = await supabase
          .from('news')
          .select('*')
          .order('published_at', { ascending: false });

        if (queryError) {
          setError(queryError.message);
          return;
        }

        setArticles(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="w-8 h-8 text-red-900" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Dragonstone Royal News
          </h2>
          <p className="font-lato text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
            Official proclamations and announcements from the Crown concerning matters of state and realm.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-900 flex-shrink-0 mt-0.5" />
            <p className="font-lato text-red-900">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="text-center py-16">
            <p className="font-lato text-stone-500">Loading royal news...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-lato text-stone-500">No news articles available at this time.</p>
          </div>
        ) : (
          <>
            {featuredArticles.length > 0 && (
              <div className="mb-12">
                <h3 className="font-cinzel text-xl font-semibold text-stone-900 mb-6 flex items-center">
                  <span className="inline-block w-1 h-6 bg-red-900 mr-3"></span>
                  Featured Announcements
                </h3>
                <div className="space-y-6">
                  {featuredArticles.map(article => (
                    <NewsCard key={article.id} article={article} featured />
                  ))}
                </div>
              </div>
            )}

            {regularArticles.length > 0 && (
              <div>
                <h3 className="font-cinzel text-xl font-semibold text-stone-900 mb-6 flex items-center">
                  <span className="inline-block w-1 h-6 bg-stone-400 mr-3"></span>
                  Recent News
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularArticles.map(article => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
