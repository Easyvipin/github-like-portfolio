export const PROFILE_QUERY = `
  *[_type == "profile"]{
    profileImg{
      asset->{
        url
      }
    },
    bio,
    position,
    socials[]{
      type,
      url,
      handle
    },
    skills,
    aboutMe,
    projects[]{
      name,
      desc,
      language,
      codeUrl,
      liveUrl
    },
    workExperience[]{
      companyLogo{
        asset->{
          url
        }
      },
      position,
      companyName,
      desc,
      companyLink,
      startDate,
      endDate
    }
  }
`;
