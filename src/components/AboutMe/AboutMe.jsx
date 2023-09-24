import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeding from "../../svg/linkedin.svg";
import logoWebsite from "../../svg/website.svg";
import logoYoutube from "../../svg/youtube.svg";
const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/samy19142",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/samuel-saravia-7005941a6",
      logo: logoLinkeding,
    },
    {
      name: "Website",
      link: "https://www.udemy.com/user/samuel-armando-saravia/",
      logo: logoWebsite,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCd67zZidG3lRLNoHwZKtgXQ",
      logo: logoYoutube,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋Hola, soy</p>
            <p>Samuel Saravia</p>
            <p>Soy desarrollador fronted y backend, <br/>soy un apasionado en el campo de la programación.</p>
          </S.Title>

          <S.ContainerText>
            Lorem ipsum dolor sit amet consectetur adipisicing e
          </S.ContainerText>

          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name}/>
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>

        <S.ContainerImage>
                <img src="img/Logo.png" alt="Samuel Saravia"/>
        </S.ContainerImage>

      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
