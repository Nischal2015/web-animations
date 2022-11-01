import { motion } from "framer-motion";
import {
  Container,
  FeatureBody,
  FeatureContent,
  FeatureDescription,
  FeatureGrid,
  FeatureImage,
  FeatureImageParticle,
  FeatureImageSpan,
  FeatureTitle,
  ImageDiv,
  Section,
} from "../../layouts";
import { Button } from "../ui";

import device1 from "/src/assets/feature/device-1.avif";

export default function FeatureLg() {
  return (
    <Section background='primary'>
      <Container>
        <FeatureContent featureLg>
          <FeatureGrid>
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
                <FeatureImageSpan url={device1} />
                <FeatureImageParticle>
                  <div>
                    <img src='' alt='' />
                  </div>
                  <div>
                    <img src='' alt='' />
                  </div>
                  <div>
                    <img src='' alt='' />
                  </div>
                </FeatureImageParticle>
              </FeatureImage>
            </ImageDiv>
          </FeatureGrid>
        </FeatureContent>
      </Container>
    </Section>
  );
}
