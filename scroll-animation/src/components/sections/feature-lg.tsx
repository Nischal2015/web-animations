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

import device1 from "/src/assets/feature/device-1.avif";
import particle11 from "/src/assets/feature/particle11.png";
import particle12 from "/src/assets/feature/particle12.png";

export default function FeatureLg() {
  const { isInView, ref } = useInView(0.6, true);
  const { heightRange: y } = useFeatureScroll({
    ref,
    amount: 2,
    scrollSpeed: 2,
  });

  const opacity = { opacity: 0 };

  return (
    <Section background='primary' ref={ref}>
      <Container>
        <FeatureContent featureLg>
          <FeatureGrid
            initial='initial'
            variants={featureAnimationVariant}
            animate={isInView ? "animate" : "none"}
          >
            <div>
              <FeatureBody>
                <FeatureTitle>
                  <h2>
                    Sleep with
                    <br />
                    bedtime stories
                  </h2>
                </FeatureTitle>
                <FeatureDescription>
                  <p>
                    Our selection of bedtime stories range from classics such
                    as; ‘Cinderella’ and ‘Sherlock Holmes’ to Sleepiest
                    Originals such as ‘The Adventures of Koko', 'The Wise
                    Elephant' and 'The Jupiter Twins'.
                  </p>
                </FeatureDescription>
                <motion.div>
                  <Button>Try For Free</Button>
                </motion.div>
              </FeatureBody>
            </div>
            <ImageDiv>
              <FeatureImage>
                <FeatureImageSpan
                  url={device1}
                  initial={{ y: 80 }}
                  style={{ y }}
                />
                <FeatureImageParticle>
                  <FeatureParticle
                    width={110}
                    height={110}
                    top={80}
                    left={-192}
                    initial={{ x: "200%", y: "200%", rotate: -130, ...opacity }}
                    variants={featureAnimationVariant}
                    animate={isInView ? "animate" : "none"}
                    transition={{
                      duration: 0.4,
                      mass: 0.75,
                      bounceDamping: 50,
                      bounceStiffness: 600,
                    }}
                  >
                    <img src={particle12} alt='particle music' />
                  </FeatureParticle>
                  <FeatureParticle
                    width={172}
                    height={172}
                    right={-193}
                    bottom={-43}
                    initial={{
                      x: "-200%",
                      y: "-100%",
                      rotate: 120,
                      ...opacity,
                    }}
                    variants={featureAnimationVariant}
                    animate={isInView ? "animate" : "none"}
                    transition={{
                      duration: 0.4,
                      mass: 0.75,
                      bounceDamping: 50,
                      bounceStiffness: 600,
                    }}
                  >
                    <img src={particle11} alt='particle fire' />
                  </FeatureParticle>
                </FeatureImageParticle>
              </FeatureImage>
            </ImageDiv>
          </FeatureGrid>
        </FeatureContent>
      </Container>
    </Section>
  );
}
