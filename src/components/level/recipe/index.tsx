import { Basket, DadinhoBox, DadinhoStack, DadinhoTypography } from "../..";
import { RecipeProps } from "../../../apis/level/levelService";
import { useTheme } from "../../../theme";

interface RecipeComponentProps {
    recipe: RecipeProps[];
}

interface TransformRecipeToBasketProps {
    recipe: RecipeProps[];
}

const svgStringMobile = `<svg width="201" height="174" viewBox="0 0 201 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M188.18 97.882C188.166 97.6002 188.057 97.3314 187.87 97.12C187.683 96.9085 187.43 96.7668 187.152 96.718C181.677 96.2288 176.247 95.3238 170.91 94.011C170.637 93.9452 170.349 93.9893 170.109 94.1336C169.868 94.2779 169.694 94.5109 169.624 94.7825L165.374 109.874C165.323 110.096 165.205 110.298 165.036 110.451C164.867 110.603 164.655 110.701 164.428 110.729C164.202 110.757 163.973 110.714 163.771 110.608C163.57 110.501 163.406 110.334 163.303 110.131C160.474 104.717 153.639 92.5357 147.318 89.2466C109.041 68.6192 78.3565 86.6614 76.5564 87.8255C76.4869 87.8964 76.397 87.9438 76.2992 87.9608C63.9146 92.3733 55.022 116.736 53.479 121.338C53.4125 121.56 53.2767 121.754 53.0916 121.893C52.9065 122.032 52.6817 122.108 52.4503 122.11H35.0442C34.7538 122.102 34.4713 122.206 34.2548 122.399C34.0383 122.593 33.9043 122.863 33.8802 123.152C33.5012 137.323 40.9726 166.722 55.4145 166.194C64.1717 165.815 71.007 155.893 74.4855 149.573C74.6106 149.352 74.8077 149.18 75.0439 149.087C75.2802 148.994 75.5412 148.985 75.7835 149.061C76.0258 149.137 76.2347 149.293 76.3753 149.505C76.516 149.716 76.5799 149.969 76.5564 150.222C76.2992 154.215 76.042 159.115 76.042 160.915C76.03 161.117 76.0711 161.318 76.1614 161.498C76.2517 161.679 76.3879 161.832 76.5564 161.944C115.998 187.85 146.032 162.458 149.253 159.629C149.367 159.533 149.46 159.415 149.527 159.283C149.594 159.15 149.635 159.006 149.646 158.858C149.768 157.436 149.511 153.444 149.389 150.344C149.383 150.103 149.453 149.866 149.588 149.666C149.724 149.466 149.918 149.313 150.144 149.229C150.37 149.144 150.616 149.131 150.85 149.193C151.083 149.255 151.291 149.387 151.446 149.573C154.153 152.929 159.31 157.694 166.402 157.044C188.18 155.366 188.316 105.746 188.18 97.882ZM50.2577 141.83C50.1057 142.475 49.8448 143.088 49.4862 143.644C49.4355 143.713 49.3716 143.771 49.2981 143.814C49.2247 143.858 49.1432 143.886 49.0586 143.898C48.974 143.909 48.8879 143.903 48.8056 143.881C48.7232 143.858 48.6463 143.819 48.5793 143.766C48.511 143.717 48.4534 143.654 48.41 143.582C48.3666 143.509 48.3384 143.429 48.327 143.345C48.3156 143.262 48.3213 143.177 48.3437 143.096C48.3662 143.014 48.4049 142.939 48.4575 142.873C48.9718 142.101 49.608 140.423 47.4153 140.03C46.0618 139.773 43.5578 139.394 44.4511 136.159C44.5211 135.98 44.6595 135.835 44.8359 135.758C45.0124 135.681 45.2123 135.676 45.3918 135.746C45.5713 135.816 45.7156 135.955 45.793 136.131C45.8704 136.308 45.8746 136.508 45.8046 136.687C45.8046 136.687 45.1549 138.352 47.7266 138.744C48.1014 138.765 48.4677 138.863 48.8025 139.033C49.1372 139.203 49.4329 139.441 49.6709 139.731C49.909 140.021 50.084 140.357 50.185 140.719C50.286 141.08 50.3108 141.459 50.2577 141.83ZM61.0857 152.537C61.0652 152.723 60.9737 152.895 60.83 153.016C60.6864 153.137 60.5017 153.198 60.3142 153.186C60.3142 153.186 58.5005 152.929 58.7577 155.501C58.8311 155.883 58.8254 156.275 58.7409 156.655C58.6565 157.034 58.4951 157.393 58.2668 157.707C58.0384 158.022 57.748 158.286 57.4133 158.484C57.0787 158.682 56.7071 158.809 56.3214 158.858C55.6656 158.9 55.0078 158.813 54.3859 158.6C54.297 158.567 54.2156 158.516 54.1465 158.451C54.0773 158.385 54.0216 158.307 53.9826 158.22C53.9437 158.134 53.9222 158.04 53.9194 157.945C53.9166 157.85 53.9325 157.755 53.9663 157.667C54 157.578 54.051 157.496 54.1162 157.427C54.1814 157.358 54.2596 157.302 54.3463 157.263C54.4331 157.224 54.5266 157.203 54.6216 157.2C54.7167 157.197 54.8113 157.213 54.9002 157.247C55.6717 157.504 57.6072 157.761 57.4719 155.582C57.35 154.229 57.2147 151.711 60.5714 151.711C60.6692 151.71 60.7657 151.734 60.8515 151.781C60.9373 151.828 61.0096 151.896 61.0613 151.979C61.113 152.062 61.1424 152.157 61.1467 152.255C61.151 152.352 61.13 152.45 61.0857 152.537ZM68.3676 127.659C68.3676 127.659 66.6893 128.174 67.9886 130.488C68.4372 131.126 68.6202 131.913 68.499 132.684C68.3777 133.454 67.9618 134.147 67.339 134.616C66.7851 134.921 66.1698 135.096 65.5388 135.131C65.3593 135.131 65.1872 135.059 65.0602 134.932C64.9333 134.806 64.862 134.633 64.862 134.454C64.862 134.274 64.9333 134.102 65.0602 133.975C65.1872 133.848 65.3593 133.777 65.5388 133.777C66.4321 133.642 68.1105 133.006 67.0818 131.07C66.4321 129.906 65.1463 127.713 68.1105 126.306C68.1943 126.266 68.2854 126.245 68.3779 126.243C68.4705 126.241 68.5625 126.259 68.6479 126.294C68.7333 126.33 68.8103 126.383 68.8739 126.45C68.9376 126.518 68.9864 126.597 69.0173 126.685C68.8143 127.267 68.6925 127.565 68.3676 127.659ZM80.874 101.618C80.8296 101.782 80.7269 101.925 80.585 102.02C80.4431 102.114 80.2716 102.154 80.1025 102.132C80.1025 102.132 78.4242 101.753 78.3024 104.325C78.167 105.868 77.3955 107.424 75.5954 107.424C74.9151 107.435 74.2451 107.257 73.6598 106.91C73.5692 106.884 73.4866 106.835 73.42 106.768C73.3534 106.701 73.305 106.619 73.2792 106.528C73.2535 106.437 73.2513 106.341 73.2729 106.25C73.2945 106.158 73.3392 106.073 73.4027 106.003C73.4266 105.913 73.4736 105.83 73.5391 105.763C73.6046 105.696 73.6863 105.647 73.7764 105.621C73.8664 105.595 73.9616 105.593 74.0527 105.615C74.1437 105.637 74.2276 105.682 74.296 105.746C75.0675 106.125 76.8812 106.517 77.003 104.392C77.003 102.971 77.1384 100.521 80.4815 100.914C80.6561 101.112 80.769 101.356 80.8064 101.618H80.874ZM89.7666 157.694C89.6984 157.873 89.5617 158.018 89.3866 158.097C89.2114 158.176 89.0122 158.181 88.8327 158.113C88.6532 158.045 88.5082 157.908 88.4295 157.733C88.3508 157.558 88.3449 157.359 88.4131 157.179C88.8056 156.408 88.9274 154.472 86.7347 154.594C85.4489 154.594 82.8637 154.851 82.9991 151.508C83.0332 151.329 83.1372 151.17 83.2882 151.067C83.4392 150.964 83.6249 150.926 83.8044 150.96C83.9839 150.994 84.1425 151.098 84.2453 151.249C84.3481 151.4 84.3867 151.586 84.3526 151.765C84.3526 151.765 84.0954 153.444 86.6806 153.444C88.2236 153.444 89.902 154.08 90.0238 155.893C90.1034 156.513 89.99 157.141 89.6989 157.694H89.7666ZM104.777 131.002C104.735 131.17 104.634 131.316 104.492 131.413C104.349 131.51 104.176 131.552 104.006 131.53C104.006 131.53 102.341 131.138 102.205 133.709C102.07 135.266 101.299 136.809 99.4983 136.809C98.8174 136.825 98.1461 136.646 97.5628 136.295C97.4864 136.252 97.4191 136.195 97.3648 136.126C97.3105 136.057 97.2703 135.979 97.2464 135.894C97.2225 135.81 97.2155 135.722 97.2256 135.635C97.2358 135.548 97.263 135.464 97.3057 135.388C97.3483 135.311 97.4056 135.244 97.4743 135.19C97.5429 135.136 97.6216 135.095 97.7058 135.071C97.79 135.048 97.8781 135.04 97.9651 135.051C98.052 135.061 98.1361 135.088 98.2125 135.131C98.984 135.523 100.784 135.902 100.92 133.709C100.92 132.356 101.041 129.852 104.398 130.231C104.655 130.272 104.912 130.623 104.777 131.002ZM127.34 152.28C127.34 152.28 125.662 152.794 126.961 155.108C127.41 155.746 127.593 156.534 127.471 157.304C127.35 158.074 126.934 158.767 126.311 159.237C125.74 159.526 125.136 159.744 124.511 159.886C124.327 159.881 124.149 159.815 124.007 159.697C123.864 159.579 123.765 159.417 123.726 159.237C123.736 159.055 123.805 158.882 123.922 158.742C124.039 158.603 124.199 158.506 124.376 158.465C125.283 158.343 126.961 157.694 125.919 155.758C125.283 154.594 123.997 152.401 126.961 150.994C127.044 150.955 127.134 150.933 127.226 150.931C127.317 150.93 127.408 150.947 127.493 150.983C127.577 151.019 127.653 151.072 127.715 151.139C127.778 151.206 127.825 151.286 127.854 151.373C127.879 151.559 127.842 151.749 127.749 151.912C127.656 152.076 127.513 152.205 127.34 152.28ZM130.44 127.145C130.304 127.524 129.925 127.524 129.533 127.402C129.14 127.28 129.14 126.888 129.276 126.495C129.668 125.724 130.047 123.924 127.922 123.788C126.569 123.666 124.065 123.531 124.444 120.31C124.444 119.917 124.836 119.795 125.215 119.795C125.381 119.837 125.526 119.939 125.621 120.082C125.716 120.224 125.755 120.397 125.729 120.567C125.729 120.567 125.215 122.245 127.922 122.367C128.707 122.345 129.47 122.629 130.048 123.16C130.627 123.69 130.976 124.426 131.022 125.209C131.011 125.896 130.809 126.566 130.44 127.145ZM145.91 105.489C145.823 105.495 145.736 105.482 145.655 105.452C145.573 105.421 145.499 105.373 145.437 105.312C145.376 105.25 145.328 105.176 145.298 105.095C145.267 105.013 145.254 104.926 145.261 104.839C145.261 103.932 144.746 102.132 142.675 103.039C141.322 103.553 139.197 104.717 138.046 101.685C138.01 101.601 137.996 101.509 138.005 101.417C138.013 101.325 138.045 101.238 138.096 101.161C138.146 101.085 138.216 101.022 138.297 100.979C138.378 100.936 138.469 100.913 138.561 100.914C138.94 100.914 139.332 101.036 139.332 101.428C139.332 101.428 139.711 103.107 142.161 102.078C142.494 101.874 142.864 101.738 143.25 101.679C143.636 101.621 144.03 101.64 144.408 101.736C144.787 101.831 145.142 102.002 145.454 102.238C145.765 102.473 146.026 102.769 146.221 103.107C146.495 103.714 146.625 104.376 146.6 105.042C146.568 105.193 146.477 105.324 146.348 105.408C146.218 105.492 146.061 105.521 145.91 105.489ZM161.367 144.93C161.338 145.017 161.29 145.096 161.228 145.164C161.166 145.231 161.091 145.285 161.007 145.322C160.923 145.359 160.832 145.378 160.74 145.378C160.649 145.378 160.558 145.359 160.474 145.323C160.387 145.291 160.307 145.243 160.239 145.179C160.172 145.116 160.118 145.039 160.081 144.954C160.044 144.869 160.025 144.778 160.025 144.685C160.025 144.592 160.045 144.501 160.081 144.416C160.339 143.644 160.596 141.709 158.281 141.83C156.928 141.966 154.41 142.101 154.41 138.866C154.431 138.681 154.523 138.51 154.667 138.392C154.811 138.273 154.996 138.215 155.182 138.23C155.37 138.247 155.543 138.338 155.665 138.482C155.787 138.627 155.846 138.813 155.831 139.002C155.831 139.002 155.574 140.802 158.146 140.545C158.52 140.473 158.904 140.476 159.276 140.555C159.649 140.633 160.002 140.785 160.314 141.002C160.627 141.219 160.893 141.496 161.097 141.817C161.301 142.139 161.439 142.497 161.503 142.873C161.59 143.561 161.544 144.259 161.367 144.93ZM180.059 126.495C180.017 126.661 179.915 126.806 179.773 126.901C179.63 126.996 179.457 127.035 179.288 127.01C179.288 127.01 177.609 126.631 177.488 129.202C177.352 130.745 176.581 132.302 174.781 132.302C174.1 132.311 173.431 132.133 172.845 131.787C172.691 131.701 172.577 131.557 172.529 131.387C172.48 131.217 172.502 131.035 172.588 130.881C172.674 130.726 172.818 130.612 172.988 130.564C173.158 130.516 173.34 130.537 173.495 130.623C174.266 131.002 176.066 131.395 176.202 129.27C176.202 127.916 176.324 125.399 179.68 125.791C179.937 125.724 180.059 126.116 180.059 126.495Z" fill="#F3C440"/>
<path d="M162.41 121.988C162.017 121.853 161.76 121.596 161.895 121.217C163.438 113.475 169.231 94.4039 169.367 94.1467C169.417 93.9923 169.526 93.8643 169.671 93.7907C169.816 93.7171 169.984 93.7039 170.138 93.7542C170.293 93.8044 170.421 93.914 170.494 94.0586C170.568 94.2033 170.581 94.3713 170.531 94.5257C170.531 94.661 164.602 113.732 163.181 121.474C163.165 121.559 163.132 121.64 163.084 121.712C163.037 121.784 162.975 121.845 162.903 121.893C162.831 121.941 162.751 121.974 162.666 121.99C162.581 122.007 162.494 122.006 162.41 121.988Z" fill="#121212"/>
<path d="M75.9068 161.565C75.8211 161.569 75.7354 161.555 75.6555 161.524C75.5756 161.492 75.5032 161.444 75.4432 161.383C75.3831 161.322 75.3367 161.248 75.307 161.168C75.2772 161.087 75.2649 161.001 75.2707 160.916C75.3093 149.881 76.0371 138.86 77.4498 127.917C77.4667 127.828 77.501 127.743 77.5506 127.668C77.6002 127.592 77.6642 127.527 77.739 127.476C77.8138 127.425 77.8978 127.39 77.9864 127.371C78.075 127.353 78.1663 127.352 78.2552 127.369C78.3441 127.386 78.4287 127.42 78.5044 127.47C78.58 127.519 78.6452 127.583 78.6961 127.658C78.747 127.733 78.7826 127.817 78.801 127.905C78.8195 127.994 78.8202 128.085 78.8033 128.174C77.5256 139.088 76.8344 150.063 76.7325 161.051C76.6107 161.173 76.3535 161.565 75.961 161.565H75.9068Z" fill="#121212"/>
<path d="M149.254 159.494C149.169 159.498 149.085 159.484 149.006 159.454C148.927 159.423 148.855 159.376 148.795 159.316C148.735 159.257 148.689 159.185 148.658 159.106C148.627 159.027 148.614 158.943 148.617 158.858C148.263 147.809 146.968 136.81 144.746 125.981C144.611 125.589 144.868 125.332 145.261 125.21C145.653 125.088 145.91 125.332 146.032 125.724C148.239 136.642 149.533 147.725 149.903 158.858C149.89 159.025 149.817 159.181 149.698 159.298C149.578 159.415 149.421 159.485 149.254 159.494Z" fill="#121212"/>
<path d="M183.024 96.0821C183.024 96.0821 183.551 91.9539 184.959 91.3042C186.367 90.6546 191.794 89.5041 193.215 88.0829C194.637 86.6617 201.079 72.6123 199.658 71.8408C198.237 71.0693 189.602 83.1832 186.773 83.4403C186.773 83.4403 189.223 77.133 188.126 76.6051C187.03 76.0772 181.562 84.6044 181.562 84.6044C181.562 84.6044 176.27 84.469 174.794 86.797C173.766 88.4754 175.051 93.5646 174.402 94.9181C177.21 95.6937 180.11 96.0853 183.024 96.0821Z" fill="white"/>
<path d="M200.43 71.4481C199.266 70.0946 197.601 72.2332 195.016 75.1973C192.823 77.769 190.116 80.9904 187.666 82.5469C187.634 82.5469 187.603 82.5597 187.58 82.5826C187.557 82.6054 187.544 82.6364 187.544 82.6687C188.316 80.6114 189.345 77.39 188.898 76.3478C188.828 76.1633 188.704 76.0041 188.542 75.8907C188.38 75.7773 188.188 75.715 187.991 75.7117C187.598 75.7117 187.084 75.7117 181.034 84.0899H180.709C178.888 84.1087 177.091 84.5051 175.43 85.2539C173.495 86.7969 173.752 88.7324 174.077 90.7898C174.266 92.114 174.266 93.4584 174.077 94.7826C173.942 95.1751 174.199 95.4323 174.591 95.5541C177.389 96.2069 180.229 96.6593 183.091 96.9077C183.227 96.9077 183.998 96.6505 183.998 96.258C184.133 94.715 184.77 92.1974 185.677 91.8726C186.962 91.4936 193.026 90.0724 194.177 87.8121C195.408 85.2539 201.716 72.8693 200.43 71.4481ZM187.666 77.6472C187.183 79.5727 186.582 81.4667 185.866 83.3184C184.891 83.559 183.901 83.7309 182.902 83.8327C184.372 81.6825 185.962 79.6173 187.666 77.6472ZM192.823 87.1218C191.794 88.8001 188.438 89.707 186.516 90.2213C186.051 90.2982 185.596 90.43 185.162 90.6138C183.484 91.25 182.834 94.0923 182.712 95.3782C180.247 95.1585 177.794 94.8151 175.363 94.3495C175.431 93.1052 175.431 91.8581 175.363 90.6138C175.106 88.5429 175.106 87.2571 176.391 86.2285C177.041 85.7141 178.977 85.5788 181.034 85.3216C183.741 85.0644 186.841 84.6719 188.641 83.5214C191.212 81.9649 194.055 78.6217 196.247 75.9147C197.411 74.5612 198.819 72.9505 199.469 72.3008C199.144 74.7778 195.273 83.5756 192.891 87.1759L192.823 87.1218Z" fill="#121212"/>
<path d="M75.1356 87.826C75.0002 86.9191 74.6212 85.1189 78.4923 81.2479C80.9421 78.6762 83.771 74.4803 83.392 70.5552C83.392 70.5552 79.6428 64.6268 79.5209 45.5423C79.3856 34.1999 79.6428 1.97282 110.462 0.808804C140.754 -0.341679 141.133 27.5 141.593 35.2286C141.85 38.9642 140.957 46.7063 140.7 53.9205C140.647 59.0642 140.195 64.1959 139.346 69.2693C139.346 69.2693 154.817 81.6404 151.203 90.2758C150.688 91.6293 144.435 92.7256 141.024 93.6325C137.614 94.5394 129.154 96.2042 124.011 100.4C114.726 107.885 112.141 110.849 103.708 110.849C96.1014 110.849 84.6237 99.5067 81.7948 94.8642C79.2638 90.6683 75.2709 88.4756 75.1356 87.826Z" fill="white"/>
<path d="M140.104 68.8765C140.75 63.9406 141.053 58.9658 141.01 53.9879C146.682 52.8374 149.389 40.8453 142.364 35.4313C141.85 20.5427 137.207 9.71461 129.086 4.88258C119.422 -0.788623 109.487 -1.57366 98.6591 2.81171C90.2809 6.16842 84.3525 13.2608 81.2665 23.6964C79.9212 28.0868 79.1834 32.6408 79.0738 37.2315C71.0746 45.6097 76.4886 53.6089 79.8453 54.2451C79.7681 59.9915 80.8642 65.6933 83.0667 71.0015C82.5817 74.1156 81.2942 77.0497 79.331 79.5151C77.3699 81.4321 75.8302 83.737 74.8103 86.2827C74.617 86.7777 74.589 87.322 74.7305 87.8343C74.872 88.3465 75.1753 88.7993 75.5953 89.125C77.5425 90.5276 79.2206 92.2699 80.5491 94.2684C82.0921 97.3679 93.4346 111.417 104.912 111.417C105.427 111.417 112.898 112.189 121.804 103.418C124.373 100.754 127.497 98.6884 130.954 97.3679C134.825 95.9467 139.075 94.7827 142.811 93.754C149.578 91.8185 151.446 91.3042 151.703 90.3973C152.61 87.5685 153.246 79.9618 140.104 68.8765ZM99.2411 4.0434C109.812 -0.220152 119.097 0.429538 128.504 6.10074C136.043 10.4861 140.361 20.6374 141.01 34.7139C140.361 34.4568 139.846 34.1996 139.197 33.9424C139.075 31.2354 137.654 7.90091 113.169 7.26476C85.4488 6.61508 83.2562 32.0069 82.999 35.1065C82.0928 35.3811 81.2244 35.7675 80.4138 36.2569C80.8063 29.8142 83.1208 10.3508 99.2411 4.0434ZM90.6057 54.1233C90.322 47.7683 90.3627 41.4031 90.7275 35.0523C91.5126 32.8596 97.0484 20.1637 111.233 20.1637C115.691 20.0615 120.067 21.3629 123.745 23.8841C127.422 26.4053 130.214 30.0186 131.725 34.2131V34.335C131.847 37.1773 132.118 43.999 131.983 52.1201C131.847 53.4736 131.725 54.8271 131.468 56.5054C130.697 60.566 129.018 66.4402 125.025 70.5549C123.298 72.3333 121.219 73.733 118.922 74.665C116.624 75.5971 114.158 76.0411 111.68 75.9689C105.63 75.9689 100.73 74.0334 97.2514 70.2977C92.7307 65.5198 91.1201 58.8199 90.6057 54.1774V54.1233ZM132.632 32.8596C130.909 28.6383 127.935 25.0459 124.109 22.5656C120.284 20.0853 115.79 18.8361 111.233 18.9862C97.1838 18.9862 91.1201 30.5857 89.6989 34.0778H88.1559C88.6702 29.4352 92.1487 11.7719 112.519 12.4216C132.632 12.936 134.554 28.5284 134.69 32.9138L132.632 32.8596ZM150.417 89.8288C149.768 90.3432 134.297 94.7286 130.44 96.0279C126.825 97.3472 123.577 99.5095 120.965 102.335C106.401 116.777 94.2873 106.585 90.2809 103.107C86.9695 100.34 84.1027 97.0802 81.7808 93.4427C80.3223 91.2498 78.4897 89.3302 76.3668 87.7715C76.1852 87.6172 76.0517 87.414 75.9821 87.1861C75.9125 86.9582 75.9098 86.7151 75.9743 86.4857C76.8806 84.1016 78.3098 81.951 80.1566 80.1919C81.9398 78.0252 83.1788 75.4635 83.7705 72.7205C84.6137 74.3451 85.6548 75.859 86.87 77.2277C88.7552 79.6668 91.3086 81.5054 94.2196 82.5199C94.2196 82.5199 94.9911 82.3845 94.9911 81.992C95.0235 81.9072 95.0352 81.8159 95.0252 81.7257C95.0151 81.6355 94.9836 81.549 94.9332 81.4734C94.8828 81.3979 94.8151 81.3355 94.7357 81.2915C94.6563 81.2475 94.5675 81.2232 94.4768 81.2205C94.4768 81.2205 80.9417 76.578 80.9417 54.6647C83.5563 55.7164 86.3708 56.1785 89.1845 56.0182C90.0603 61.4994 92.3983 66.6429 95.9521 70.9068C100.337 76.0637 115.037 81.613 125.729 71.2993C130.115 67.2388 131.658 60.8637 132.497 56.6002C132.643 55.9645 132.729 55.3165 132.754 54.6647C135.023 54.8451 137.306 54.6716 139.522 54.1503C139.657 55.964 139.779 72.9777 135.461 77.16C130.818 81.5318 125.147 82.3033 119.341 83.3455C113.927 84.2389 108.255 85.1457 103.099 89.0168C103.03 89.0661 102.973 89.1289 102.929 89.2011C102.886 89.2734 102.858 89.3538 102.846 89.4373C102.835 89.5208 102.841 89.6058 102.863 89.6871C102.885 89.7683 102.924 89.8442 102.977 89.9101C103.099 90.0454 103.748 90.1672 103.87 90.0454C108.77 86.4315 114.184 85.5382 119.476 84.6314C125.269 83.7245 131.197 82.6958 136.354 78.1887C138.033 76.6321 139.061 73.6679 139.711 70.1894C143.975 73.898 152.732 82.547 150.417 89.883V89.8288Z" fill="#121212"/>
<path d="M109.163 56.8841C105.305 52.3769 105.562 52.1197 105.684 51.7272C105.806 51.3347 106.077 51.091 110.327 50.3737C110.327 48.6953 110.191 42.388 110.069 38.3816C110.069 38.2021 110.141 38.03 110.268 37.9031C110.395 37.7761 110.567 37.7048 110.746 37.7048C110.926 37.7048 111.098 37.7761 111.225 37.9031C111.352 38.03 111.423 38.2021 111.423 38.3816C111.937 51.5377 111.815 51.5377 111.044 51.6595C111.044 51.6595 107.687 52.1739 107.173 52.3092C108.085 53.6131 109.075 54.8606 110.137 56.0449C110.394 56.3021 110.394 56.9517 110.002 56.9517C109.609 56.9517 109.298 57.0194 109.163 56.8841Z" fill="#121212"/>
<path d="M110.327 63.598C109.127 63.5786 107.958 63.22 106.955 62.5636C105.951 61.9073 105.154 60.9801 104.655 59.8893C104.622 59.8005 104.606 59.7058 104.608 59.6108C104.611 59.5157 104.633 59.4222 104.672 59.3355C104.711 59.2488 104.766 59.1706 104.836 59.1053C104.905 59.0401 104.986 58.9892 105.075 58.9554C105.164 58.9216 105.258 58.9057 105.354 58.9085C105.449 58.9113 105.542 58.9328 105.629 58.9718C105.716 59.0108 105.794 59.0664 105.859 59.1356C105.924 59.2048 105.975 59.2861 106.009 59.375C106.391 60.256 107.023 61.0059 107.826 61.5325C108.63 62.0591 109.569 62.3395 110.53 62.3392C111.496 62.3033 112.434 62.0095 113.248 61.4882C114.062 60.967 114.722 60.2373 115.159 59.375C115.201 59.2986 115.259 59.2313 115.327 59.177C115.396 59.1227 115.475 59.0825 115.559 59.0586C115.643 59.0347 115.731 59.0277 115.818 59.0378C115.905 59.048 115.989 59.0752 116.065 59.1178C116.142 59.1605 116.209 59.2178 116.263 59.2864C116.318 59.3551 116.358 59.4338 116.382 59.518C116.406 59.6022 116.413 59.6903 116.403 59.7772C116.392 59.8642 116.365 59.9483 116.323 60.0247C115.711 61.0824 114.839 61.966 113.79 62.5915C112.74 63.2169 111.548 63.5634 110.327 63.598Z" fill="#121212"/>
<path d="M120.126 47.8702C118.583 46.0565 118.772 42.5779 118.772 42.4561C118.772 42.2766 118.844 42.1045 118.97 41.9776C119.097 41.8507 119.27 41.7794 119.449 41.7794C119.629 41.7794 119.801 41.8507 119.928 41.9776C120.054 42.1045 120.126 42.2766 120.126 42.4561C120.126 43.3494 120.126 45.7993 121.154 46.8279C121.498 47.2004 121.974 47.4232 122.48 47.4485C122.986 47.4739 123.482 47.2996 123.861 46.9633C124.768 46.0564 125.025 43.2276 125.025 42.3208C125.022 42.2344 125.036 42.1482 125.067 42.0677C125.098 41.9871 125.146 41.9139 125.207 41.8528C125.268 41.7917 125.342 41.744 125.422 41.7127C125.503 41.6814 125.589 41.6672 125.675 41.6711C125.761 41.6671 125.847 41.6812 125.926 41.7126C126.006 41.7441 126.079 41.792 126.139 41.8534C126.199 41.9147 126.245 41.9881 126.275 42.0686C126.305 42.1492 126.317 42.2351 126.311 42.3208C126.311 42.4561 126.311 45.9346 124.768 47.7348C124.478 48.0578 124.125 48.3185 123.731 48.501C123.337 48.6836 122.91 48.7842 122.476 48.7969C122.042 48.8096 121.61 48.7339 121.206 48.5746C120.802 48.4153 120.434 48.1757 120.126 47.8702Z" fill="#121212"/>
<path d="M100.405 49.1558C96.5344 49.0204 96.5344 42.8349 96.5344 42.5777C96.5303 42.492 96.5445 42.4063 96.5759 42.3264C96.6073 42.2465 96.6553 42.1741 96.7166 42.1141C96.778 42.054 96.8514 42.0076 96.9319 41.9779C97.0125 41.9481 97.0984 41.9358 97.184 41.9416C97.2686 41.9377 97.3531 41.9516 97.432 41.9822C97.5109 42.0128 97.5826 42.0595 97.6424 42.1194C97.7023 42.1792 97.749 42.2509 97.7796 42.3298C97.8102 42.4087 97.824 42.4932 97.8202 42.5777C97.8202 42.5777 97.9555 47.7346 100.405 47.87C100.92 47.87 102.977 47.0849 102.977 42.5777C102.973 42.492 102.987 42.4063 103.019 42.3264C103.05 42.2465 103.098 42.1741 103.159 42.1141C103.221 42.054 103.294 42.0076 103.375 41.9779C103.455 41.9481 103.541 41.9358 103.627 41.9416C103.711 41.9377 103.796 41.9516 103.875 41.9822C103.954 42.0128 104.025 42.0595 104.085 42.1194C104.145 42.1792 104.192 42.2509 104.222 42.3298C104.253 42.4087 104.267 42.4932 104.263 42.5777C103.884 49.9273 100.527 49.1558 100.405 49.1558Z" fill="#121212"/>
<path d="M125.797 35.9997C125.54 35.9997 123.862 33.6852 122.062 33.6852C121.479 33.6817 120.902 33.8004 120.369 34.0335C119.835 34.2666 119.356 34.6091 118.962 35.0387C118.903 35.0989 118.832 35.1467 118.755 35.1793C118.677 35.2119 118.593 35.2287 118.509 35.2287C118.424 35.2287 118.341 35.2119 118.263 35.1793C118.185 35.1467 118.115 35.0989 118.055 35.0387C117.994 34.9817 117.945 34.9126 117.911 34.8358C117.878 34.7589 117.86 34.6759 117.86 34.5921C117.86 34.5082 117.878 34.4253 117.911 34.3484C117.945 34.2715 117.994 34.2024 118.055 34.1454C118.573 33.5642 119.209 33.1013 119.922 32.7883C120.634 32.4754 121.406 32.3196 122.184 32.3317C123.016 32.4612 123.811 32.7705 124.512 33.2379C125.213 33.7054 125.804 34.3199 126.244 35.0387C126.296 35.1065 126.334 35.1842 126.356 35.2671C126.377 35.3499 126.382 35.4363 126.369 35.521C126.357 35.6056 126.327 35.6869 126.282 35.7598C126.238 35.8328 126.179 35.896 126.109 35.9456C126.014 35.9987 125.904 36.0178 125.797 35.9997Z" fill="#121212"/>
<path d="M96.9266 35.7427C96.7823 35.6506 96.6757 35.5099 96.626 35.3461C96.5764 35.1823 96.587 35.0061 96.6559 34.8494C97.0734 34.0791 97.6883 33.4337 98.4376 32.9794C99.1868 32.5251 100.043 32.2783 100.919 32.2642C101.713 32.2696 102.497 32.4328 103.227 32.7441C103.956 33.0555 104.617 33.5089 105.169 34.0779C105.231 34.1349 105.28 34.204 105.314 34.2808C105.347 34.3577 105.364 34.4407 105.364 34.5245C105.364 34.6084 105.347 34.6913 105.314 34.7682C105.28 34.8451 105.231 34.9142 105.169 34.9712C105.11 35.0313 105.04 35.0791 104.962 35.1117C104.884 35.1443 104.8 35.1611 104.716 35.1611C104.632 35.1611 104.548 35.1443 104.47 35.1117C104.392 35.0791 104.322 35.0313 104.263 34.9712C103.842 34.5431 103.341 34.203 102.788 33.9706C102.235 33.7382 101.641 33.6183 101.041 33.6177C100.404 33.6488 99.7857 33.8432 99.2453 34.1821C98.7049 34.5211 98.2607 34.9932 97.9552 35.5532C97.4409 35.9998 96.9266 35.878 96.9266 35.7427Z" fill="#121212"/>
<path d="M92.5413 113.353C90.3486 113.095 79.0062 113.095 74.9456 113.095C73.5921 102.389 70.8174 84.9829 69.2744 78.6756C68.6247 76.2257 67.2171 74.1549 64.1176 74.1549C53.2895 73.8977 22.9979 73.6405 5.98431 74.1549C3.53446 74.2902 1.20643 76.2257 1.46359 78.6756C2.24863 88.3396 5.5918 107.681 7.66267 117.21C8.177 119.66 9.72 121.731 12.1699 121.731C16.0409 121.731 20.9271 121.731 26.2193 121.853C27.7533 122.959 29.5152 123.708 31.3762 124.045C37.0474 129.595 37.4399 126.495 37.4399 126.495C40.2687 129.852 41.6899 126.116 41.6899 126.116C43.7472 128.823 45.5609 126.495 45.5609 126.495C47.9973 129.08 49.5538 125.724 50.0681 122.624C50.0597 122.556 50.0663 122.487 50.0873 122.421C50.1083 122.356 50.1434 122.296 50.1899 122.245C57.932 122.245 65.2816 122.245 70.9528 121.988C72.1082 121.971 73.213 121.51 74.0388 120.702C78.5595 120.702 91.6344 120.31 92.8661 120.052C95.2483 119.538 95.4378 113.731 92.5413 113.353Z" fill="white"/>
<path d="M95.5056 116.574C95.3702 114.761 94.3416 112.703 92.5414 112.581C91.1879 112.446 75.7849 112.446 75.3924 112.446C74.0389 101.753 71.3319 84.8615 69.7212 78.5406C68.9497 75.3193 66.8788 73.5191 63.9147 73.5191C51.7331 73.262 21.9559 73.0048 5.78141 73.5191C4.26583 73.5721 2.83179 74.2186 1.78856 75.3193C1.36003 75.759 1.03358 76.2878 0.832408 76.8679C0.631234 77.448 0.560265 78.0653 0.624542 78.676C1.39604 88.2182 4.68507 107.167 6.81008 117.346C7.45977 120.445 9.39528 122.367 11.967 122.367H25.7592C27.3007 123.651 29.1814 124.459 31.1733 124.695C32.5268 126.374 35.8158 128.824 37.1016 127.267C39.944 129.852 41.3652 127.781 41.7442 126.888C42.9082 128.038 44.8437 128.174 45.4934 127.145C47.8079 129.717 49.7434 126.374 50.2577 123.409C50.2577 123.152 50.3796 122.76 50.3796 122.503H52.3151L58.5006 137.459C58.5632 137.576 58.6571 137.673 58.7718 137.74C58.8865 137.807 59.0175 137.841 59.1503 137.838C59.2565 137.834 59.3604 137.805 59.4541 137.755C59.5478 137.705 59.629 137.635 59.6915 137.549C59.754 137.463 59.7963 137.364 59.815 137.259C59.8338 137.154 59.8287 137.047 59.8 136.945L53.7363 122.503C62.1145 122.503 69.0715 122.503 70.8852 122.367C72.1179 122.354 73.3047 121.898 74.2284 121.081C76.8136 121.081 91.6345 120.702 92.9204 120.445C93.7681 120.259 94.511 119.752 94.993 119.031C95.475 118.309 95.6587 117.429 95.5056 116.574ZM27.0586 122.245C26.1517 121.596 24.0944 119.403 24.6087 118.767C24.9877 118.374 25.9622 119.281 27.6947 119.66C28.3105 120.931 29.0446 122.141 29.8874 123.274C29.7656 123.152 29.1159 123.667 27.0586 122.245ZM35.8835 126.631C33.948 126.888 30.4694 121.731 30.2123 121.217C28.9264 119.024 28.0196 116.317 28.2767 115.546C29.0482 115.546 32.6621 118.889 33.3118 119.917C34.3405 121.988 35.2473 124.046 36.3978 125.981C36.073 126.495 35.9511 126.631 35.8835 126.631ZM37.9543 126.238C37.3047 125.589 31.8906 114.503 33.3118 113.096C36.3978 114.382 40.4042 125.074 40.7832 125.724C40.5937 128.566 38.401 126.888 37.8867 126.211L37.9543 126.238ZM44.7219 125.981C43.6932 127.66 41.3787 126.495 39.4432 119.024C39.186 117.995 38.5364 111.796 39.565 111.796C40.5937 111.796 42.6646 116.831 44.4647 121.474C44.4512 121.596 44.7084 125.981 44.7084 125.981H44.7219ZM48.5929 124.181C47.2394 128.566 46.2784 126.374 45.8859 125.859C45.825 125.044 45.825 124.225 45.8859 123.409C46.1431 121.474 47.4289 114.639 48.4711 114.896C50.2577 115.153 48.9719 123.274 48.5794 124.181H48.5929ZM73.7817 119.66C73.4005 120.106 72.9273 120.464 72.3945 120.709C71.8618 120.954 71.2822 121.081 70.6957 121.081C66.8247 121.217 59.0962 121.339 50.3931 121.339C50.921 116.953 50.2713 113.732 48.7283 113.475C46.9146 113.218 45.2362 119.917 45.2362 120.053C44.8572 119.024 44.2076 117.603 43.6932 116.182C41.3787 110.903 40.2147 110.253 39.4432 110.253C38.0897 110.253 37.5077 112.189 37.7648 116.439C35.9647 113.867 34.0292 111.417 32.8651 111.675C31.3221 112.054 31.8365 115.288 32.229 117.089C28.6151 113.732 27.8436 114.246 27.4511 114.382C26.4224 114.896 26.9368 117.346 27.3293 118.51C26.1653 117.995 24.6223 117.346 23.9726 117.738C22.6191 118.632 24.1079 120.824 24.2298 121.081C17.787 121.081 13.0227 120.96 11.7233 120.96C8.89449 120.96 8.12298 117.86 7.86582 116.899C5.79495 106.856 2.45178 87.9069 1.66675 78.4865C1.61653 78.0357 1.67237 77.5795 1.82983 77.1541C1.98728 76.7287 2.24198 76.3461 2.5736 76.0366C3.42981 75.2569 4.51922 74.7812 5.67313 74.6831C12.6302 74.426 35.315 74.0335 63.8064 74.6831C66.2562 74.6831 67.8669 76.0366 68.4489 78.676C71.2015 91.3534 73.2215 104.179 74.4991 117.089C74.5901 117.543 74.5726 118.013 74.4479 118.46C74.3233 118.907 74.095 119.318 73.7817 119.66ZM92.6091 119.281C91.7022 119.403 82.4171 119.66 75.5954 119.796C76.2316 118.51 76.2316 116.439 75.7173 113.732C78.8168 113.732 90.281 113.732 92.4737 113.867C94.6664 114.003 94.9912 119.024 92.5414 119.281H92.6091Z" fill="#121212"/>
<path d="M30.6589 97.6251C30.6589 98.5836 31.0397 99.5028 31.7174 100.18C32.3951 100.858 33.3144 101.239 34.2728 101.239C35.2313 101.239 36.1505 100.858 36.8282 100.18C37.5059 99.5028 37.8867 98.5836 37.8867 97.6251C37.8867 96.6666 37.5059 95.7474 36.8282 95.0697C36.1505 94.392 35.2313 94.0112 34.2728 94.0112C33.3144 94.0112 32.3951 94.392 31.7174 95.0697C31.0397 95.7474 30.6589 96.6666 30.6589 97.6251Z" fill="#214EDB"/>
<path d="M176.716 107.032C176.448 107.626 176.05 108.153 175.552 108.575C175.493 108.635 175.423 108.683 175.345 108.715C175.267 108.748 175.183 108.765 175.099 108.765C175.015 108.765 174.931 108.748 174.853 108.715C174.775 108.683 174.705 108.635 174.645 108.575C174.584 108.518 174.535 108.449 174.501 108.372C174.468 108.295 174.451 108.212 174.451 108.128C174.451 108.044 174.468 107.961 174.501 107.884C174.535 107.808 174.584 107.738 174.645 107.681C175.295 107.032 176.324 105.489 174.267 104.582C172.913 104.068 170.653 103.039 172.196 100.075C172.245 100.005 172.308 99.9459 172.381 99.9011C172.454 99.8563 172.536 99.8267 172.62 99.8141C172.705 99.8015 172.791 99.8061 172.874 99.8276C172.957 99.8491 173.035 99.8871 173.102 99.9394C173.36 100.197 173.495 100.589 173.238 100.846C173.238 100.846 172.196 102.267 174.591 103.296C176.324 104.068 177.353 105.353 176.716 107.032Z" fill="white"/>
<path d="M96.1606 57.3961C96.9796 57.4687 97.7865 57.2954 98.4039 56.9143C99.0213 56.5332 99.3986 55.9755 99.4528 55.364C99.507 54.7525 99.2337 54.1372 98.6929 53.6535C98.1522 53.1698 97.3883 52.8573 96.5694 52.7847C96.1639 52.7488 95.7571 52.7729 95.3722 52.8555C94.9873 52.9382 94.6319 53.0779 94.3262 53.2666C94.0205 53.4553 93.7705 53.6893 93.5905 53.9553C93.4105 54.2213 93.3041 54.5141 93.2773 54.8169C93.2504 55.1197 93.3037 55.4266 93.4341 55.72C93.5645 56.0135 93.7694 56.2879 94.0371 56.5274C94.3049 56.7669 94.6302 56.9669 94.9946 57.1159C95.3589 57.265 95.7552 57.3602 96.1606 57.3961Z" fill="white"/>
<path d="M121.926 55.5512C121.944 55.8559 122.041 56.1527 122.214 56.4245C122.387 56.6963 122.631 56.9377 122.933 57.1348C123.235 57.332 123.588 57.4809 123.972 57.5731C124.356 57.6653 124.764 57.699 125.172 57.6721C125.58 57.6453 125.98 57.5584 126.349 57.4166C126.717 57.2748 127.048 57.0808 127.321 56.8458C127.594 56.6108 127.805 56.3395 127.941 56.0474C128.076 55.7553 128.134 55.4482 128.112 55.1438C128.094 54.8391 127.996 54.5423 127.824 54.2705C127.651 53.9987 127.407 53.7573 127.105 53.5602C126.803 53.363 126.45 53.2141 126.066 53.1219C125.682 53.0297 125.274 52.996 124.866 53.0229C124.458 53.0497 124.058 53.1366 123.689 53.2784C123.32 53.4202 122.99 53.6142 122.717 53.8492C122.443 54.0842 122.233 54.3555 122.097 54.6476C121.962 54.9398 121.903 55.2468 121.926 55.5512Z" fill="white"/>
</svg>
`;

const base64Svg = `data:image/svg+xml;base64,${btoa(svgStringMobile)}`;

const TransformRecipeToBasket = ({ recipe }: TransformRecipeToBasketProps) => {
    const result: any[] = [];
    recipe?.forEach(entry => {
        for (let i = 0; i < entry.quantity; i++) {
            result.push({...entry.item});
        }
    });

    return result;
}

export const Recipe = ({ recipe }: RecipeComponentProps) => {
    const theme = useTheme();
    const recipeToBasket = TransformRecipeToBasket({ recipe: recipe });

    return (
        !recipeToBasket?.length ? (
            <DadinhoTypography variant="h3" color="error">Não há receita cadastrada para este nível</DadinhoTypography>
        ) : (
            <DadinhoStack 
                direction="row" 
                justifyContent="space-between" 
                sx={{ 
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: "column-reverse",
                        pb: 0,
                    },
                }}
            >
                <DadinhoBox
                    sx={{
                        height: '180px',
                        width: '40vw',
                        backgroundImage: `url(${base64Svg})`,
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 10, 
                        mr: -5,
                        [theme.breakpoints.down('sm')]: {
                            flexDirection: "column-reverse",
                            width: '60vw',
                            mt: -2,
                            ml: -8,
                        },
                    }}
                />
                <DadinhoBox 
                    p={1.5} 
                    width="60vw" 
                    height="10vh" 
                    textAlign="center"
                    bgcolor={theme.palette.primary.light}  
                    border="2px solid" 
                    borderRadius="10px"
                    sx={{ 
                        [theme.breakpoints.down('sm')]: {
                            width: "auto",
                        },
                    }}
                >
                    <DadinhoTypography variant="body1">Monte uma sequência de comandos que agrupe os seguintes itens...</DadinhoTypography>
                    <DadinhoBox sx={{ mt: 1, textAlign: "-webkit-center" }}>
                        <Basket items={recipeToBasket} index={1} customHeight="auto" noTitle customBg={"white"} />
                    </DadinhoBox>
                </DadinhoBox>
            </DadinhoStack>
        )
    );
}

export default Recipe;