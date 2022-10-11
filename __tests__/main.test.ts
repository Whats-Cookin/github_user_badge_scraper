import { getGithubUserAchievements } from '../src/main';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getGithubUserAchievements function', () => {
  it('Success returns an object', async () => {
    const content = fs.readFileSync(
      path.join(__dirname, 'github_profile.txt'),
      'utf-8',
    );

    mockedAxios.get.mockResolvedValueOnce({ data: content });

    const url = 'https://github.com/ArnobChowdhury';

    const result = await getGithubUserAchievements(url);

    expect(result).toStrictEqual({
      'Pair Extraordinaire': 2,
      Quickdraw: 1,
      'Pull Shark': 3,
      YOLO: 1,
      'Arctic Code Vault Contributor': 1,
    });
  });

  // Assert greeter result
});
