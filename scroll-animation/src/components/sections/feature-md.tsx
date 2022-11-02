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

import device2 from "/src/assets/feature/device-2.avif";
import particle21 from "/src/assets/feature/particle21.png";
import particle22 from "/src/assets/feature/particle22.png";

export default function FeatureMd() {
  const { isInView, ref } = useInView(0.5, true);
  const { heightRange: y } = useFeatureScroll({
    ref,
    amount: 1.4,
    scrollSpeed: 1.4,
  });

  const opacity = { opacity: 0 };

  return (
    <Section ref={ref}>
      <Container>
        <FeatureContent featureMd>
          <FeatureGrid
            initial='initial'
            variants={featureAnimationVariant}
            animate={isInView ? "animate" : "none"}
          >
            <div>
              <FeatureBody>
                <FeatureTitle>
                  <h2>
                    Relax with
                    <br />
                    sleep sounds
                  </h2>
                </FeatureTitle>
                <FeatureDescription>
                  <p>
                    Our soothing sleep sounds range from those found in nature,
                    with titles such as 'Storms Rolling In' and 'Gentle Stream',
                    to originally crafted soundscapes like 'Rain On Route 66' as
                    well as relaxing sleep music such as the wildly popular
                    'Waves Of Atlantis.'
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
                    width={110}
                    height={110}
                    top={10}
                    right={-160}
                    initial={{ x: "-200%", y: "200%", rotate: -60, ...opacity }}
                    variants={featureAnimationVariant}
                    animate={isInView ? "animate" : "none"}
                  >
                    <img src={particle21} alt='particle music' />
                  </FeatureParticle>
                  <FeatureParticle
                    width={175}
                    height={185}
                    left={-203}
                    bottom={-40}
                    initial={{ x: "100%", y: "-100%", rotate: 90, ...opacity }}
                    variants={featureAnimationVariant}
                    animate={isInView ? "animate" : "none"}
                  >
                    <img src={particle22} alt='particle mountain' />
                  </FeatureParticle>
                </FeatureImageParticle>
                <FeatureImageSpan
                  url={device2}
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
