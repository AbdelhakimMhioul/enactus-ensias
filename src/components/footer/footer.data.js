import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Best Community',
      description:
        'The Enactus Society is a positive and encouraging environment providing you with a network of students that share your passion for social change.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Network',
      title: 'Develop your Network',
      description: 'Build a professional network. Having a network, especially a professional one, can be very convenient.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Business World',
      title: 'Discover the Business World',
      description: "A lot of students want to try to run a business, but often don't have the resources to do so.With Enactus students just can have a look in the world of business",
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
