export type SocialProvider = 'github' | 'facebook' | 'google';

const { GITHUB_ID, FACEBOOK_ID, GOOGLE_ID, API_HOST } = process.env;
const redirectPath = 'api/auth/social/callback';
export const redirectUri = `http:localhost:5000/${redirectPath}`;

export function generateSocialLoginLink(provider: SocialProvider, next: string = '/') {
  const generators = {
    github(next: string) {
      return `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_ID}&state=${next}`;
    },
    facebook(next: string) {
      return '';
    },
    google(next: string) {
      return '';
    },
  };

  const generator = generators[provider];
  return generator(encodeURI(next));
}
