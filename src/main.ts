import { load } from 'cheerio';
import axios from 'axios';

export async function getGithubUserAchievements(
  githubUrl: string,
): Promise<{ [key: string]: number }> {
  const achievements = {};
  const response = await axios.get(githubUrl);
  const $ = load(response.data);
  const achievementsElements = $('h2 a')
    .first()
    .parent()
    .parent()
    .find('a img');

  achievementsElements.each(function () {
    const alt = $(this).attr()['alt'];
    const prefix = 'Achievement: ';

    if (alt.startsWith(prefix)) {
      const achievement = alt.slice(prefix.length);
      const freqAsString = $(this).parent().find('span').text();
      const freq = freqAsString ? Number(freqAsString.slice(1)) : 1;
      achievements[achievement] = freq;
    }
  });
  return achievements;
}
