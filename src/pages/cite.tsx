import * as React from "react";
import {Block} from "baseui/block";
import {ParagraphLarge} from "baseui/typography";


export default function Cite() {
    const content = `@article{
        utsd2022,
        title = {Little Data Is Often Enough for Distance-Based Outlier Detection},
        author = {Muhr, David and Affenzeller, Michael},
        year = {2022},
        month = jan,
        journal = {Procedia Computer Science},
        series = {3rd {{International Conference}} on {{Industry}} 4.0 and {{Smart Manufacturing}}},
        volume = {200},
        pages = {984--992},
        issn = {1877-0509},
        doi = {10.1016/j.procs.2022.01.297},
        langid = {english},
        keywords = {anomaly detection,clustering,k-means,knn,local outlier factor,lof,nearest neighbors,outlier detection,prototypes,unsupervised}
    }`

    return (
        <Block maxWidth={"1280px"} margin={"auto"}>
            <ParagraphLarge>
                <cite>
                    MLA
                    <hr/>
                    Muhr, David, Michael Affenzeller. ‘Little Data Is Often Enough for Distance-Based Outlier
                    Detection’. Procedia Computer Science 200 (2022): 984–992. Web. 3rd International Conference on
                    Industry 4.0 and Smart Manufacturing.
                    <br/><br/>

                    BibTex
                    <hr/>
                    {content}
                    <br/><br/>
                </cite>
            </ParagraphLarge>
        </Block>
    );
}
