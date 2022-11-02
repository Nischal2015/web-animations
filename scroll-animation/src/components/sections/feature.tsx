import { motion } from "framer-motion";
import { featureAnimationVariant } from "../../data";
import { useFeatureScroll, useInView } from "../../hooks";
import {
  Container,
  FeatureBody,
  FeatureContent,
  FeatureDescription,
  FeatureGrid,
  FeatureImage,
  FeatureImageParticle,
  FeatureImageSpan,
  FeatureParticle,
  FeatureTitle,
  ImageDiv,
  Section,
} from "../../layouts";
import { Button } from "../ui";

import device3 from "/src/assets/feature/device-3.avif";
import particle31 from "/src/assets/feature/particle31.png";
import particle32 from "/src/assets/feature/particle32.png";
import particle33 from "/src/assets/feature/particle33.png";

export default function Feature() {
  const { ref, isInView } = useInView(0.55, true);
  const { heightRange: y } = useFeatureScroll({
    ref,
    amount: 1.6,
    scrollSpeed: 1.3,
  });

  const opacity = { opacity: 0 };

  return (
    <Section background='primary' ref={ref}>
      <Container>
        <FeatureContent>
          <FeatureGrid
            initial='intial'
            variants={featureAnimationVariant}
            animate={isInView ? "animate" : "none"}
          >
            <div>
              <FeatureBody>
                <FeatureTitle>
                  <h2>
                    Find calm with
                    <br />
                    sleep meditations
                  </h2>
                </FeatureTitle>
                <FeatureDescription>
                  <p>
                    Sleep meditations are one of the most exciting new areas of
                    Sleepiest; with titles such as 'Getting Back to Sleep' and
                    'Calm a Racing Mind', as well as meditation story hybrids
                    such as 'The Magical West Highland Line' which the community
                    has fallen asleep to over 1 million times!
                  </p>
                </FeatureDescription>
                <motion.div>
                  <Button>Try For Free</Button>
                </motion.div>
              </FeatureBody>
            </div>
            <ImageDiv>
              <FeatureImage>
                <FeatureImageParticle>
                  <FeatureParticle
                    width={170}
                    top={45}
                    height={170}
                    right={-142}
                    initial={{
                      x: "-100%",
                      y: "100%",
                      rotate: -60,
                      ...opacity,
                    }}
                    variants={featureAnimationVariant}
                    animate={isInView ? "animate" : "none"}
                  >
                    <img src={particle31} alt='particle crown' />
                  </FeatureParticle>
                  <FeatureParticle
                    width={138}
                    height={146}
                    left={-194}
                    bottom={78}
                    initial={{
                      x: "200%",
                      y: "-100%",
                      rotate: 80,
                      ...opacity,
                    }}
                    variants={featureAnimationVariant}
                    animate={isInView ? "animate" : "none"}
                  >
                    <img src={particle32} alt='particle music' />
                  </FeatureParticle>
                  <FeatureParticle
                    width={40}
                    height={40}
                    right={-82}
                    bottom={-25}
                    initial={{
                      x: "-200%",
                      y: "-200%",
                      rotate: 60,
                      ...opacity,
                    }}
                    variants={featureAnimationVariant}
                    animate={isInView ? "animate" : "none"}
                  >
                    <img src={particle33} alt='particle block' />
                  </FeatureParticle>
                </FeatureImageParticle>
                <FeatureImageSpan
                  url={device3}
                  initial={{ y: 80 }}
                  style={{ y }}
                />
              </FeatureImage>
            </ImageDiv>
          </FeatureGrid>
        </FeatureContent>
      </Container>
    </Section>
  );
}
