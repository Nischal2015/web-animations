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

import device3 from "/src/assets/feature/device-3.avif";

export default function Feature() {
  return (
    <Section background='primary'>
      <Container>
        <FeatureContent>
          <FeatureGrid>
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
                <FeatureImageSpan url={device3} />
              </FeatureImage>
            </ImageDiv>
          </FeatureGrid>
        </FeatureContent>
      </Container>
    </Section>
  );
}
