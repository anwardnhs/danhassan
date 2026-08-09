import { NewsArticle } from '../lib/types';
import { Calendar, User, Tag } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const date = new Date(article.published_at);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <div className="bg-white border-l-4 border-red-900 shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-red-900/10 border border-red-900/20 rounded mb-4">
              <span className="font-lato text-xs uppercase tracking-wider text-red-900 font-semibold">
                {article.category}
              </span>
            </div>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-stone-900 mb-4 leading-tight">
              {article.title}
            </h2>
            <p className="font-lato text-stone-700 text-base md:text-lg mb-4 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-stone-600 font-lato">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-red-900" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-red-900" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
          <div className="md:w-24 flex-shrink-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-900/20 to-amber-600/20 rounded flex items-center justify-center">
              <span className="font-cinzel text-2xl text-red-900">◈</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white border-t-2 border-stone-200 hover:border-red-900 shadow hover:shadow-lg transition-all p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="inline-block px-2 py-0.5 bg-amber-600/10 rounded mb-2">
            <span className="font-lato text-xs uppercase tracking-wider text-amber-700 font-semibold">
              {article.category}
            </span>
          </div>
          <h3 className="font-cinzel text-lg font-bold text-stone-900 leading-tight">
            {article.title}
          </h3>
        </div>
      </div>

      <p className="font-lato text-sm text-stone-600 mb-4 flex-grow leading-relaxed">
        {article.excerpt}
      </p>

      <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-lato">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Tag className="w-3 h-3" />
            <span>{article.author}</span>
          </div>
        </div>
        <button className="text-red-900 hover:text-red-700 font-semibold transition-colors">
          Read
        </button>
      </div>
    </article>
  );
}
