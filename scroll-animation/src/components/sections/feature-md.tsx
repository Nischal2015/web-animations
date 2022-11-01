import { motion } from "framer-motion";
import {
  Container,
  FeatureBody,
  FeatureContent,
  FeatureDescription,
  FeatureGrid,
  FeatureImage,
  FeatureImageSpan,
  FeatureTitle,
  ImageDiv,
  Section,
} from "../../layouts";
import { Button } from "../ui";

import device2 from "/src/assets/feature/device-2.avif";

export default function FeatureMd() {
  return (
    <Section>
      <Container>
        <FeatureContent featureMd>
          <FeatureGrid>
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
                <FeatureImageSpan url={device2} />
              </FeatureImage>
            </ImageDiv>
          </FeatureGrid>
        </FeatureContent>
      </Container>
    </Section>
  );
}
