import * as React from "react";
import { ParagraphLarge } from "baseui/typography";
import StyleLink from "../components/styleLink";
import Container from "../components/container";

export default function About() {
  return (
    <Container>
      <ParagraphLarge>
        The unusual time series detection (UTSD) collection was initially proposed by David Muhr and Michael Affenzeller
        [1]. The authors curate a collection of outlier/anomaly detection tasks to identify unusual series from a given
        time series dataset. The presented work is based on the popular{" "}
        <StyleLink href="https://timeseriesclassification.com/" text="UCR time series classification archive" />. In
        addition to the detection tasks, the UTSD collection provides benchmarks, an evaluation scheme and baseline
        results.
      </ParagraphLarge>

      <ParagraphLarge>
        [1]&nbsp;
        <cite>
          Muhr, David, and Michael Affenzeller. “Outlier/Anomaly Detection of Univariate Time Series: A Dataset
          Collection and Benchmark.” In Big Data Analytics and Knowledge Discovery, edited by Robert Wrembel, Johann
          Gamper, Gabriele Kotsis, A. Min Tjoa, and Ismail Khalil, 163–69. Lecture Notes in Computer Science. Cham:
          Springer International Publishing, 2022.
        </cite>
        &nbsp;
        <StyleLink
          href="https://doi.org/10.1007/978-3-031-12670-3_14"
          text="https://doi.org/10.1007/978-3-031-12670-3_14"
        />
        .
      </ParagraphLarge>
    </Container>
  );
}
