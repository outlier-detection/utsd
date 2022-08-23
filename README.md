# Unusual Time Series Detection

Website for the paper:

```
Muhr, David, and Michael Affenzeller. “Outlier/Anomaly Detection of Univariate Time Series:
A Dataset Collection and Benchmark.” In Big Data Analytics and Knowledge Discovery, edited
by Robert Wrembel, Johann Gamper, Gabriele Kotsis, A. Min Tjoa, and Ismail Khalil, 163–69.
Lecture Notes in Computer Science. Cham: Springer International Publishing, 2022.
https://doi.org/10.1007/978-3-031-12670-3_14.

@inproceedings{utsd2022,
  title = {Outlier/{{Anomaly Detection}} of {{Univariate Time Series}}: {{A Dataset Collection}} and {{Benchmark}}},
  shorttitle = {Outlier/{{Anomaly Detection}} of~{{Univariate Time Series}}},
  booktitle = {Big {{Data Analytics}} and {{Knowledge Discovery}}},
  author = {Muhr, David and Affenzeller, Michael},
  editor = {Wrembel, Robert and Gamper, Johann and Kotsis, Gabriele and Tjoa, A. Min and Khalil, Ismail},
  year = {2022},
  series = {Lecture {{Notes}} in {{Computer Science}}},
  pages = {163--169},
  publisher = {{Springer International Publishing}},
  address = {{Cham}},
  doi = {10.1007/978-3-031-12670-3_14},
  abstract = {In this paper, we present an extensive collection of outlier/anomaly detection tasks to identify unusual series from a given time series dataset. The presented work is based on the popular UCR time series classification archive. In addition to the detection tasks, we provide curated benchmarks, an evaluation scheme and baseline results. The resulting unusual time series detection collection is openly available at: https://outlier-detection.github.io/utsd/.},
  isbn = {978-3-031-12670-3},
  langid = {english},
  keywords = {Anomaly detection,Outlier detection,Time series}
}
```

### Clone the repository from GitHub

Because we host a lot of datasets on the `gh-pages` branch, you might want to individually clone the branches of this repository.

```bash
# first clone the code repository into ./utsd
git clone https://github.com/outlier-detection/utsd --branch main --single-branch utsd

# next clone the data repository into ./utsd/out
git clone https://github.com/outlier-detection/utsd --branch gh-pages --single-branch utsd/out
```

This setup allows you to more easily deploy the website on GitHub pages using the commands below.

### Deploy the website on GitHub Pages

```bash
next build
next export
touch out/.nojekyll
git add out/ -f
git commit -m 'Deploy gh-pages'
git subtree push --prefix out origin gh-pages
```

Note that the max [file size on GitHub is 100MB](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github) and the [max size of a single push is 2GB](https://stackoverflow.com/questions/38768454/repository-size-limits-for-github-com), it might thus be necessary to split large files in the out folder and use multiple pushes.
