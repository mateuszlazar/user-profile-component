import mockProfilePhoto from '../assets/images/profile-photo.png';

export const mockedProfile = {
  details: {
    name: 'Harvey Specter',
    address: 'New York, USA',
    userPhoto: mockProfilePhoto,
    likeCount: 121,
    followingCount: 723,
    followersCount: 4432,
    hasProfileLike: false,
    hasProfileFollow: false
  },
  comments: [
    {
      name: 'Mike Ross',
      userPhoto: mockProfilePhoto,
      commentDate: 1,
      content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui non feils.'
    }, {
      name: 'Rachel Zain',
      userPhoto: mockProfilePhoto,
      commentDate: 7,
      content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui non feils.'
    }, {
      name: 'Louis Litt',
      userPhoto: mockProfilePhoto,
      commentDate: 5,
      content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui non feils.'
    }
  ]
};
