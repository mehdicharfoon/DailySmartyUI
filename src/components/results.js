.results {
    // @include default-page-layout();
    height: 100vh;
    width: 66vw;
    display: grid;
    margin-top: 52px;
    grid-row-gap: 44px;
}
.results-posts {
    display: grid;
    grid-row-gap: 21px;
    .results-posts__wrapper {
        .results-posts__posts {
            display: grid;
            grid-row-gap: 20px;
            justify-content: stretch;
        }
    }
}
.result-post {
    display: grid;
    align-content: space-around;
    grid-row-gap: 22px;
    .result-post__topics > * {
        color: $color-blue-one;
        font-size: 14px;
        line-height: 17px;
        font-weight: normal;
    }
    .result-post__title a {
        color: $color-gray-one;
        font-size: 18px;
        line-height: 22px;
    }

    .result-post__links {
        // display: flex;
    }
}

.post-link {
    min-height: 70px;
    display: flex;

    .post-link__box {
        min-width: 70px;
        background-color: $color-gray-three;
        margin-right: 16px;
    }

    .post-link__link a {
        color: $color-gray-one;
        font-size: 14px;
        line-height: 17px;
    }
}