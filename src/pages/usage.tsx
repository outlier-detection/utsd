import * as React from "react";
import { ParagraphLarge } from "baseui/typography";
import StyleLink from "../components/styleLink";
import Container from "../components/container";

const pythonCode = `
from sklearn.model_selection import RepeatedStratifiedKFold
from sklearn.ensemble import IsolationForest
from sklearn.metrics import roc_auc_score

def cross_validate(model, x, y, n_splits=2, n_repeats=5, random_state=0):
    """
    Calculates the mean stratified cv result over a number of folds and repeats.
    Note: The model is expected to follow the scikit-learn outlier detection
    interface providing \`fit\` and \`decision_function\` methods. Additionally,
    scikit-learn models use increasing scores to indicate normality.
    """
    cv = RepeatedStratifiedKFold(
        n_splits=n_splits,
        n_repeats=n_repeats,
        random_state=random_state
    )
    results = []
    for train_index, test_index in cv.split(x, y):
        model.fit(x[train_index])
        y_true = y[test_index]
        y_pred = model.decision_function(x[test_index])
        score = roc_auc_score(y_true, -y_pred)
        results.append(score)
    return np.mean(results)

model = IsolationForest(random_state=0)
dataset = "Crop"
classes = 1
fraction = 0.1
variant = 1

# read normal data
x_normal = pd.read_csv(PATH_TO_DATASETS / dataset / f"{dataset}_{classes}_normal.csv", header=None)
y_normal = np.zeros(len(x_normal))

# read outlier data
x_outlier = pd.read_csv(PATH_TO_DATASETS / dataset / f"{dataset}_{classes}_{fraction}_{variant}.csv", header=None)
y_outlier = np.ones(len(x_outlier))

# concatenate data
x = np.concatenate([x_normal, x_outlier])
y = np.concatenate([y_normal, y_outlier])

# predict roc auc
cross_validate(model, x, y)
`;

const juliaCode = `
using CSV
using MLJ
using OutlierDetection
using DataFrames
KNN = @iload KNNDetector pkg = OutlierDetectionNeighbors

function cross_validate(model, x, y, n_splits=2, n_repeats=5, random_state=0)
    """
    Calculates the mean stratified cv result over a number of folds and repeats.
    """
    cv = StratifiedCV(nfolds=n_splits, shuffle=true, rng=random_state)
    probabilistic_model = ProbabilisticDetector(model)
    score = evaluate(probabilistic_model, x, y;
        resampling=cv,
        repeats=n_repeats
    ).measurement[1]
    return score
end

model = KNN(k=100)
dataset = "Crop"
classes = 1
fraction = 0.1
variant = 1

# read normal data
x_normal = CSV.read("$(PATH_TO_DATASETS)/$(dataset)/$(dataset)_$(classes)_normal.csv", DataFrame, header=false)
y_normal = repeat(["normal"], nrow(x_normal))

# read outlier data
x_outlier = CSV.read("$(PATH_TO_DATASETS)/$(dataset)/$(dataset)_$(classes)_$(fraction)_$(variant).csv", DataFrame, header=false)
y_outlier = repeat(["outlier"], nrow(x_outlier))

# concatenate data
x = reduce(vcat, [x_normal, x_outlier])
y = vcat(y_normal, y_outlier) |> to_categorical

# predict roc auc
cross_validate(model, x, y)
`;

export default function About() {
  return (
    <Container>
      <ParagraphLarge>
        The simplest way to get started is to{" "}
        <StyleLink href={"https://download.com"} text={"download the entire UTSD collection."} />; optionally, you can
        download individual tasks by{" "}
        <StyleLink href={"/"} text={"selecting the task in the overview table and clicking download"} />. The data for
        each task is provided in multiple CSV files. There is one file containing all datapoints considered normal and
        ten files containing randomly sampled outliers. The files are named{" "}
        <i>$(DATASET)_$(CLASSES)_$(FRACTION)_$(VARIANT).csv</i>, for example, <i>Crop_1_0.1_1.csv</i> would describe the
        first randomly sampled variant of the &apos;Crop&apos; dataset with with 10% outliers and one normal class.
      </ParagraphLarge>
      <ParagraphLarge>
        The following example shows how to predict a single variant of the previously mentioned task using Python and
        the <StyleLink href={"https://scikit-learn.org/stable/"} text={"scikit-learn library"} />.
      </ParagraphLarge>
      <pre style={{ overflowX: "auto" }}>
        <code>{pythonCode}</code>
      </pre>
      <ParagraphLarge>
        Similarly, predicting a single variant with Julia using{" "}
        <StyleLink href={"https://alan-turing-institute.github.io/MLJ.jl/dev/"} text={"MLJ"} /> and{" "}
        <StyleLink
          href={"https://outlierdetectionjl.github.io/OutlierDetection.jl/stable/"}
          text={"OutlierDetection.jl"}
        />{" "}
        can be achieved as follows.
      </ParagraphLarge>
      <pre style={{ overflowX: "auto" }}>
        <code>{juliaCode}</code>
      </pre>
      <ParagraphLarge>
        Using a different programming language?{" "}
        <StyleLink
          href={"https://github.com/outlier-detection/utsd/issues/new"}
          text={"Help us improve the documentation by providing a similar code snippet"}
        />
        .
      </ParagraphLarge>
    </Container>
  );
}
