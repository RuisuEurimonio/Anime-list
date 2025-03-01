import { Genre } from './Genre.model';
import { Image } from './Image.model';

export interface Anime {
  mal_id: number;
  url: string;
  images: { jpg: Image; webp?: Image };
  title: string;
  title_japanese: string;
  episodes: number;
  status: string;
  score: number;
  synopsis: string;
  background: string;
  genres: Genre[];
}
