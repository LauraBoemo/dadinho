import { useMemo, useState } from "react";
import { DadinhoBox, DadinhoStack, DadinhoButton, DadinhoTypography } from "../..";
import { useTheme } from "../../../theme";

interface AttemptProps {
    options: string[];
    handleAttempt: (attempt: string[]) => void;
}

const svgStringMobile = `<svg width="151" height="187" viewBox="0 0 151 187" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2775 99.2354C21.4934 97.0766 25.4891 94.5128 29.2084 91.5801C29.4673 91.3956 29.788 91.3193 30.1022 91.3675C30.4165 91.4156 30.6996 91.5844 30.8915 91.838C34.787 98.326 49.1746 122.568 49.1746 122.568C61.6212 102.344 75.113 90.8064 97.536 90.8064C118.018 90.8064 141.622 110.257 149.006 139.032C156.389 167.807 133.586 166.911 133.586 166.911L136.301 175.34C136.404 175.59 136.408 175.869 136.313 176.121C136.217 176.374 136.028 176.58 135.785 176.698C102.002 194.669 72.1269 181.883 67.5934 179.548C67.4059 179.484 67.2427 179.363 67.1261 179.203C67.0095 179.043 66.9452 178.85 66.9419 178.652C66.684 175.53 66.1683 167.495 65.5846 160.233C62.9921 161.794 49.2967 163.98 41.1528 156.351C26.9145 142.778 17.9562 106.687 16.531 100.335C16.5038 99.9683 16.7617 99.4525 17.2775 99.2354Z" fill="#214EDB"/>
<path d="M78.3431 117.6C78.4788 116.949 80.5555 100.62 84.4375 91.6752C84.5144 91.5431 84.6362 91.4431 84.7807 91.3933C84.9252 91.3434 85.0827 91.3472 85.2247 91.4037C85.3523 91.4847 85.4479 91.6074 85.4949 91.7511C85.5419 91.8947 85.5376 92.0502 85.4826 92.1909C82.2386 99.7105 80.1619 113.067 79.6461 116.623C83.8963 114.981 88.3392 113.891 92.8664 113.379C96.3683 114.166 102.721 118.048 104.933 119.351C106.358 109.619 105.571 91.9874 105.571 91.7295C105.556 91.5731 105.603 91.417 105.702 91.295C105.801 91.173 105.944 91.0951 106.1 91.0779C106.177 91.0705 106.254 91.0783 106.328 91.1009C106.402 91.1235 106.47 91.1605 106.53 91.2097C106.589 91.2589 106.638 91.3194 106.674 91.3876C106.71 91.4559 106.731 91.5305 106.738 91.6073C106.738 91.7295 107.783 110.786 105.965 120.383C105.947 120.479 105.905 120.569 105.844 120.646C105.783 120.722 105.705 120.783 105.615 120.821C105.525 120.86 105.427 120.877 105.329 120.869C105.232 120.861 105.138 120.829 105.055 120.776C104.933 120.776 97.4135 115.849 93.2601 114.546L94.0337 139.181C105.357 142.296 117.026 143.974 128.768 144.176C126.175 140.294 120.081 127.454 119.823 126.803C119.766 126.664 119.761 126.51 119.808 126.368C119.855 126.226 119.952 126.106 120.081 126.029C120.221 125.971 120.378 125.965 120.522 126.013C120.666 126.06 120.789 126.157 120.868 126.287C122.985 130.671 128.645 142.371 130.193 144.176C132.405 144.176 133.573 144.054 133.573 144.054C133.727 144.038 133.882 144.084 134.003 144.182C134.124 144.28 134.201 144.422 134.217 144.577C134.233 144.732 134.188 144.886 134.09 145.007C133.992 145.128 133.849 145.205 133.695 145.222C119.468 145.691 105.259 143.858 91.6177 139.792C91.3598 142.005 90.3283 148.751 90.2604 151.601C102.537 161.236 117.642 166.563 133.247 166.762C133.749 166.762 134.21 166.762 134.21 167.414C134.21 168.065 133.858 168.065 133.315 168.065C119.711 167.877 106.425 163.926 94.9296 156.65L96.6127 186.348C96.6281 186.503 96.5829 186.657 96.4867 186.779C96.3904 186.9 96.2506 186.98 96.0969 187C95.839 187 95.4454 186.728 95.4454 186.471L93.898 155.877C91.0476 153.936 89.4867 152.51 89.351 152.51C89.2724 152.446 89.2087 152.365 89.1642 152.274C89.1197 152.182 89.0954 152.083 89.0931 151.981C89.0931 148.737 90.4504 139.412 90.654 139.019C90.654 138.896 91.3055 138.503 91.4277 138.503L92.785 138.896L92.1471 114.777C87.7613 115.651 83.4289 116.775 79.1711 118.143C78.7367 118.374 78.2209 118.238 78.3431 117.6Z" fill="black"/>
<path d="M88.7264 161.035C88.7035 161.192 88.7122 161.352 88.7518 161.505C88.7915 161.659 88.8614 161.803 88.9574 161.93C89.0534 162.056 89.1737 162.162 89.3112 162.241C89.4486 162.321 89.6005 162.372 89.758 162.392C90.2738 162.392 90.7896 161.74 90.7896 161.035C90.8202 160.727 90.7294 160.421 90.5366 160.18C90.3438 159.939 90.0643 159.783 89.758 159.745C89.2422 159.609 88.7264 160.315 88.7264 161.035Z" fill="black"/>
<path d="M88.4689 175.68C88.444 175.837 88.4513 175.998 88.4901 176.152C88.529 176.307 88.5987 176.452 88.6951 176.578C88.7915 176.705 88.9125 176.811 89.0509 176.89C89.1893 176.969 89.3422 177.019 89.5004 177.037C90.0162 177.037 90.532 176.386 90.532 175.68C90.5627 175.373 90.4719 175.066 90.2791 174.825C90.0863 174.584 89.8068 174.428 89.5004 174.39C88.9846 174.255 88.4689 174.906 88.4689 175.68Z" fill="black"/>
<path d="M86.9083 127.848C86.8777 128.155 86.9685 128.462 87.1613 128.703C87.3541 128.944 87.6336 129.1 87.9399 129.137C88.2393 129.083 88.5092 128.922 88.7008 128.686C88.8925 128.449 88.9933 128.152 88.985 127.848C89.0098 127.69 89.0022 127.528 88.9624 127.373C88.9227 127.217 88.8518 127.072 88.754 126.945C88.6563 126.818 88.5337 126.712 88.3937 126.634C88.2537 126.556 88.0993 126.507 87.9399 126.491C87.6446 126.576 87.3847 126.754 87.1988 126.998C87.0129 127.243 86.911 127.541 86.9083 127.848Z" fill="black"/>
<path d="M33.3618 105.805C43.0531 104.651 65.639 104.963 71.2176 105.018C71.587 105.002 71.9513 105.108 72.2551 105.319C72.5589 105.529 72.7856 105.833 72.9006 106.185C77.7598 120.952 84.7501 155.048 86.1345 161.686C86.1655 161.849 86.1626 162.016 86.126 162.178C86.0894 162.339 86.0199 162.492 85.9219 162.626C85.8239 162.759 85.6994 162.871 85.5561 162.955C85.4129 163.038 85.254 163.091 85.0894 163.111C70.8239 165.527 50.9935 164.088 46.7179 163.559C46.1885 163.559 45.2791 162.595 45.0212 162.066C41.913 155.523 33.7419 116.568 31.8009 107.773C31.7856 107.313 31.9342 106.863 32.2201 106.502C32.506 106.142 32.9106 105.895 33.3618 105.805Z" fill="white"/>
<path d="M41.1394 100.878C42.2072 100.629 43.2913 100.457 44.3834 100.362C44.3834 99.8327 45.035 95.6114 48.2654 95.2992C51.4958 94.9871 53.6947 98.6654 54.3598 99.9684C56.1786 99.9684 57.4816 100.091 58.2553 100.091C58.4159 100.114 58.569 100.175 58.703 100.266C58.837 100.358 58.9485 100.479 59.029 100.62C59.8026 102.697 60.712 105.805 61.1057 107.23C61.2414 107.624 60.9699 107.882 60.5899 107.882C54.6851 108.465 48.7417 108.552 42.8225 108.14C42.5646 108.14 42.4289 108.004 42.3067 107.746C42.0489 106.579 41.1394 103.077 40.7458 101.652C40.6237 101.258 40.8816 100.878 41.1394 100.878ZM53.0703 99.8327C52.2831 98.4754 50.6 96.0729 48.5233 96.3308C46.4466 96.5887 45.9308 98.6654 45.6729 100.091C48.1327 99.8782 50.6017 99.7921 53.0703 99.8327Z" fill="black"/>
<path d="M67.0651 164.93C67.4587 164.93 67.7166 164.672 67.5944 164.278C67.4723 163.885 67.323 163.627 66.9429 163.762C58.6361 164.143 46.4881 163.871 45.6737 161.944C42.3211 153.976 32.5755 107.23 32.4534 106.714C32.4192 106.534 32.3149 106.375 32.1634 106.272C32.012 106.169 31.8258 106.13 31.6458 106.164C31.4658 106.199 31.3067 106.303 31.2036 106.454C31.1006 106.606 31.0619 106.792 31.0961 106.972C31.4897 108.913 40.8281 154.478 44.3299 162.459C46.3524 166.396 64.4047 164.753 67.0651 164.93Z" fill="black"/>
<path d="M26.3582 93.2223C26.3582 93.2223 25.9645 82.2008 23.6435 81.0064C21.3225 79.8119 20.4131 80.4906 20.4131 80.4906C20.4131 80.4906 17.4677 75.3328 14.753 75.3328C13.07 75.3328 12.9342 77.1516 12.9342 77.1516C12.5826 77.0179 12.2036 76.9728 11.8304 77.0201C11.4573 77.0675 11.1015 77.2059 10.7944 77.4231C10.4873 77.6403 10.2384 77.9297 10.0695 78.2658C9.90065 78.6019 9.817 78.9744 9.82597 79.3504C9.82597 79.3504 6.97559 80.002 8.26505 83.4224C8.26505 83.4224 5.94403 84.9698 10.5996 90.0326C13.2437 92.8678 16.2039 95.3907 19.4222 97.5521C21.8113 96.2362 24.1267 94.7907 26.3582 93.2223Z" fill="white"/>
<path d="M90.6677 140.81C90.6677 140.81 90.1519 148.954 89.6226 150.012C84.3504 150.203 79.0766 149.678 73.9455 148.451C65.1229 146.022 67.4575 144.569 68.2312 144.176C68.2312 144.176 62.6662 142.751 62.9241 141.067C63.0598 140.158 67.5932 140.81 67.5932 140.81C67.5932 140.81 60.3316 136.656 61.4989 135.625C62.6662 134.593 72.5203 138.611 72.5203 138.611C72.5203 138.611 64.1049 133.304 65.2586 131.987C66.0459 131.091 80.1892 136.656 82.103 137.308L81.5872 135.109C81.4651 134.973 90.1519 140.81 90.6677 140.81Z" fill="white"/>
<path d="M61.3633 134.838C62.3542 133.861 65.0009 135.639 70.4438 137.308C67.7292 135.747 64.4716 133.684 64.7295 132.246C65.0688 129.422 70.566 132.354 81.3295 136.318L80.9359 134.96C80.678 134.187 81.4653 133.929 81.8453 134.309C82.6326 134.96 90.9258 140.403 91.1837 140.661C91.4416 140.919 91.3059 141.082 91.3059 141.217C91.3059 141.828 90.4236 149.579 90.1386 150.189C89.8535 150.8 89.3649 150.651 88.7812 150.651C86.0666 150.651 78.1534 150.488 72.0454 148.316C67.2677 146.606 66.6162 145.724 66.7383 144.95C66.7367 144.708 66.8292 144.474 66.9962 144.299C65.24 143.879 63.6134 143.036 62.2592 141.842C62.1187 141.685 62.0302 141.489 62.0059 141.28C61.9815 141.071 62.0226 140.859 62.1234 140.675C62.5171 140.159 63.6843 139.901 65.7611 140.037C62.7749 138.611 61.2276 137.322 60.834 135.965C60.9018 135.49 60.9018 135.109 61.3633 134.838ZM70.566 140.675C72.249 141.326 73.9457 141.842 75.3709 142.235C75.5257 142.288 75.6534 142.399 75.7259 142.546C75.7985 142.692 75.8099 142.861 75.7577 143.016C75.7055 143.171 75.594 143.298 75.4476 143.371C75.3013 143.443 75.1321 143.455 74.9773 143.403C74.9773 143.403 64.9738 140.159 63.6165 141.312C63.4943 142.086 68.9372 143.647 69.0458 143.647C71.1354 144.275 73.2556 144.795 75.398 145.208C75.5528 145.226 75.6941 145.305 75.7909 145.427C75.8876 145.549 75.9318 145.705 75.9138 145.859C75.8958 146.014 75.8171 146.156 75.6949 146.252C75.5727 146.349 75.4171 146.393 75.2623 146.375C75.2623 146.375 68.2585 144.679 68.1364 145.018C68.0142 145.357 69.0458 145.9 72.5477 147.095C78.7913 149.239 87.3289 149.294 89.392 149.294C89.8379 146.679 90.1415 144.042 90.3014 141.394C89.1341 140.607 84.7364 137.634 82.524 136.209C82.524 136.209 83.2977 137.892 82.0082 137.892C80.0672 137.756 65.9239 131.404 65.8018 132.313C65.8018 132.571 66.304 133.671 70.7289 136.209C73.4435 137.77 76.3074 139.059 76.3074 139.059C76.9997 139.399 76.3753 140.417 75.9138 140.227C71.6383 139.181 62.5578 135.164 62.3406 135.815C61.6212 136.915 70.566 140.675 70.566 140.675Z" fill="black"/>
<path d="M0.419248 95.9507C3.13389 93.7382 7.04298 90.63 9.24184 88.8112C6.64936 85.1871 7.16514 83.2461 7.88452 82.9882C7.61306 82.0788 6.71722 79.7442 9.43187 78.6991C9.5676 78.0612 9.43186 76.1066 12.418 76.3645C12.5401 75.7266 13.5717 73.4055 16.8293 75.1972C18.2474 76.2071 19.4019 77.5432 20.1954 79.0927C23.3037 76.7581 30.3075 71.1795 30.4432 71.1795C31.2983 70.7452 31.5155 71.8718 31.0812 72.0889C30.6468 72.3061 24.7289 77.016 21.5799 79.4863C22.0332 79.447 22.4896 79.5081 22.9166 79.6653C23.3436 79.8225 23.7306 80.0719 24.0502 80.3958C25.8555 82.3367 26.3848 88.1732 26.6427 92.7067C26.6738 92.8286 26.6657 92.9572 26.6194 93.0742C26.573 93.1912 26.491 93.2906 26.3848 93.3582C24.223 95.0252 21.9205 96.5011 19.5032 97.7695C19.2905 97.8321 19.0643 97.8321 18.8517 97.7695C15.5584 95.2742 12.4426 92.553 9.52688 89.6255C7.19228 91.5665 2.74027 95.0548 0.704284 96.7515C0.568552 96.9822 -0.612317 96.9822 0.419248 95.9507ZM8.46817 84.1555C8.21028 84.6713 8.72606 86.0965 10.1512 88.0375C10.5449 87.6439 11.1828 87.2638 11.5086 87.386C12.1601 87.6439 13.7074 88.7433 14.2232 88.2954C14.2232 88.2954 14.3318 88.0511 13.6939 87.2638C12.1737 85.2278 8.84822 83.6262 8.46817 84.1555ZM9.82549 80.0021C9.43187 79.8664 8.14241 80.6536 9.03824 82.8525C11.2167 83.4791 13.1589 84.7408 14.6168 86.4766C14.8769 86.7963 15.0957 87.1474 15.2683 87.5217C15.2683 87.5217 16.2999 88.2954 16.6257 87.7796C16.6257 87.7796 16.775 87.386 16.3678 86.4223C15.0105 82.5675 10.5449 80.3958 9.89335 80.0021H9.82549ZM12.6759 77.9254C12.0244 77.6675 10.7349 77.5318 10.7349 79.2828C12.0922 79.9207 16.042 82.2553 17.6029 85.8929C17.8446 86.3741 17.9789 86.9021 17.9966 87.4403C18.3766 87.4403 18.6345 87.4403 18.7702 87.3181C19.1639 86.8023 18.3766 84.4677 18.3766 84.4677C16.2999 84.332 16.1778 83.6805 16.042 83.4226C15.7841 82.5132 16.5714 82.0653 16.8293 81.7395C15.8236 80.1334 14.415 78.8185 12.7437 77.9254H12.6759ZM16.1778 76.3645C15.662 75.9845 13.9653 75.1972 13.5853 77.016C15.3317 78.04 16.8364 79.4289 17.9966 81.088L19.6118 80.2329C18.7401 78.7452 17.5985 77.4333 16.2456 76.3645H16.1778ZM19.5439 96.7243C21.6539 95.558 23.6893 94.2615 25.6383 92.8424C25.3804 86.8702 24.7289 82.7168 23.4394 81.5495C21.8785 80.0021 17.6029 82.4589 17.3451 82.9882C19.1486 83.2649 20.9869 83.2189 22.7743 82.8525C23.168 82.8525 23.4259 82.9882 23.4259 83.3683C23.4259 83.7483 23.2901 84.0198 22.9101 84.0198C22.53 84.0198 22.2586 84.1555 22.0007 84.1555C22.2586 87.386 20.5755 87.6439 19.7882 87.6439C19.7106 87.8693 19.5848 88.0751 19.4196 88.247C19.2544 88.4189 19.0537 88.5527 18.8316 88.6393C18.6094 88.7258 18.3711 88.7629 18.1331 88.7481C17.8952 88.7332 17.6633 88.6667 17.4536 88.5533C17.161 88.8224 16.7909 88.9923 16.396 89.0386C16.0011 89.085 15.6017 89.0053 15.2548 88.8112C15.2548 88.8112 14.739 90.7657 11.1828 88.5533L10.667 89.0826C13.4958 91.8035 16.4825 94.3552 19.6118 96.7243H19.5439ZM19.6796 84.2777C19.8884 84.9524 20.016 85.6495 20.0597 86.3544C20.9691 86.2187 20.8469 84.7935 20.7112 84.2777H19.6796Z" fill="black"/>
<path d="M113.837 58.8689C113.837 58.8689 118.317 57.5931 119.674 60.4163C121.031 63.2395 120.705 67.5558 112.792 68.8453C112.792 68.8453 108.91 78.0615 102.3 80.7761C102.095 84.7052 102.095 88.6422 102.3 92.5713C102.3 92.5713 93.6133 112.157 92.7989 113.583C92.7989 113.583 87.8718 96.8604 86.8402 92.0555C86.8402 92.0555 88.0075 82.9886 87.7496 81.8213C87.7496 81.8213 75.683 79.2288 74.5157 67.5558C73.4842 57.0501 80.3522 46.2866 83.0805 35.1429C83.0805 35.1429 88.0075 30.2973 94.6177 30.7316C105.585 31.4375 119.457 39.9343 113.837 58.8689Z" fill="white"/>
<path d="M96.8847 68.4651C96.7625 69.3745 97.7941 70.2703 99.0971 70.406C99.6343 70.4844 100.182 70.3709 100.644 70.0854C101.105 69.7999 101.452 69.3607 101.622 68.8451C101.744 67.9357 100.848 67.1756 99.4093 67.0399C97.9705 66.9041 97.0204 67.5557 96.8847 68.4651Z" fill="white"/>
<path d="M78.737 61.3255C78.9747 60.8907 79.0397 60.3823 78.9189 59.9017C78.7981 59.4211 78.5005 59.0038 78.0855 58.733C77.9116 58.5473 77.7014 58.3992 77.4679 58.298C77.2344 58.1968 76.9827 58.1445 76.7282 58.1445C76.4737 58.1445 76.222 58.1968 75.9885 58.298C75.755 58.3992 75.5448 58.5473 75.3709 58.733C75.247 58.9391 75.1655 59.1678 75.1313 59.4058C75.097 59.6437 75.1106 59.8862 75.1713 60.1188C75.232 60.3514 75.3385 60.5696 75.4847 60.7605C75.6308 60.9514 75.8136 61.1112 76.0224 61.2305C76.9182 61.8549 78.2212 61.977 78.737 61.3255Z" fill="white"/>
<path d="M78.3434 48.241C80.04 43.9654 81.8453 38.1154 82.4968 35.7944C79.7821 34.3556 75.778 31.003 79.2528 23.7278C84.2206 13.3714 103.766 15.5838 107.268 22.8184C107.268 22.8184 126.841 25.0308 132.161 40.9793C137.482 56.9279 121.52 65.4111 121.52 65.4111C121.52 65.4111 120.23 76.5683 107.268 77.9935C105.965 79.214 104.526 80.2798 102.979 81.1696C102.649 85.0083 102.649 88.8682 102.979 92.7069C102.979 93.2905 103.698 91.5125 93.3961 114.424C93.2604 114.94 92.4867 114.94 92.2288 114.288C91.9709 113.637 87.166 96.1409 86.3923 91.8653C86.3923 91.0238 87.1524 87.1283 87.3017 82.1333C81.981 80.586 78.3298 77.8714 76.1445 74.098C71.1903 65.6283 76.2938 53.426 78.3434 48.241ZM77.1897 73.6501C79.66 78.0614 84.5871 80.9118 91.713 81.9433C92.1066 81.9433 92.2424 82.3369 92.2424 82.5948C92.222 82.7486 92.1426 82.8884 92.021 82.9846C91.8994 83.0809 91.7452 83.1261 91.5908 83.1106C90.495 82.9734 89.4107 82.7557 88.3469 82.4591C88.2215 85.5461 87.9179 88.6233 87.4374 91.6753C88.089 95.2994 91.5094 107.746 92.7581 112.279L101.567 92.5711C101.22 88.6063 101.22 84.6187 101.567 80.6539C101.571 80.5526 101.596 80.4533 101.641 80.3621C101.685 80.271 101.748 80.1901 101.825 80.1245C106.308 77.559 109.715 73.4626 111.421 68.5873C111.557 68.3294 111.679 68.2072 111.937 68.2072C113.211 68.1898 114.468 67.9165 115.634 67.4035C116.8 66.8905 117.85 66.1483 118.724 65.2211C119.511 64.3117 120.434 61.1491 118.072 59.6425C116.416 58.5702 113.417 59.2489 113.281 59.1267C113.145 59.0046 110.295 56.2764 111.34 50.0463C111.34 50.0463 103.82 48.3632 101.608 41.9023C101.608 41.9023 89.0391 45.5399 83.4605 36.2016C82.809 38.6719 81.0309 44.4677 79.3885 48.526C77.3254 53.7653 72.6291 65.479 77.1897 73.6501Z" fill="black"/>
<path d="M97.1562 6.48975C98.2893 5.77186 99.6508 5.50597 100.971 5.74482C102.291 5.98366 103.473 6.70978 104.282 7.77921C104.282 7.77921 105.449 0.137485 111.544 0.00175313C117.638 -0.133979 117.638 7.65705 117.638 7.65705C117.638 7.65705 124.425 3.08288 128.782 7.39916C133.139 11.7154 130.139 17.1176 130.139 17.1176C130.139 17.1176 137.577 18.95 135.853 25.6687C134.713 30.0936 131.442 30.3379 129.243 30.08C131.317 31.3494 133.682 32.0645 136.111 32.1567C136.291 32.1567 136.464 32.2282 136.591 32.3555C136.719 32.4828 136.79 32.6554 136.79 32.8354C136.79 33.0154 136.719 33.188 136.591 33.3153C136.464 33.4425 136.291 33.514 136.111 33.514C135.853 33.514 129.108 33.3783 126.61 29.7543C125.022 28.6548 118.412 22.1804 108.408 21.3932C108.408 21.3932 105.544 16.4661 94.9167 15.4345C94.8352 15.2988 92.5956 8.7972 97.1562 6.48975Z" fill="black"/>
<path d="M87.166 64.0533C86.6013 62.7967 86.1472 61.4932 85.8087 60.1578C86.4867 60.1921 87.1634 60.0704 87.787 59.8022C88.4106 59.5339 88.9643 59.1262 89.4056 58.6104C91.9709 55.7329 91.1023 49.7878 91.1023 49.5299C91.1023 49.272 90.7086 49.0142 90.4507 49.0142C90.1929 49.0142 89.935 49.4078 89.935 49.6657C89.935 49.6657 90.8172 55.2171 88.5776 57.701C88.1598 58.1628 87.6324 58.5118 87.0441 58.7158C86.4557 58.9198 85.8255 58.9723 85.2115 58.8683C84.6278 58.8683 84.56 59.0583 84.56 59.5198C84.8022 61.2601 85.2817 62.959 85.9852 64.5691C86.8403 65.4242 87.3832 64.4876 87.166 64.0533Z" fill="black"/>
<path d="M87.0302 53.4258C87.076 53.3573 87.1069 53.28 87.1207 53.1988C87.1345 53.1176 87.1309 53.0345 87.1103 52.9547C87.0896 52.875 87.0524 52.8006 87.0009 52.7363C86.9495 52.672 86.885 52.6193 86.8117 52.5817C86.7385 52.5441 86.6581 52.5225 86.5758 52.5182C86.4936 52.5138 86.4114 52.527 86.3346 52.5567C86.2578 52.5864 86.1882 52.632 86.1303 52.6906C86.0724 52.7491 86.0275 52.8193 85.9986 52.8964C85.9986 52.8964 84.5735 56.1404 82.4968 55.8825C82.2389 55.8825 80.6779 55.6246 81.3295 51.3491C81.3384 51.2724 81.3321 51.1948 81.311 51.1205C81.2899 51.0463 81.2544 50.977 81.2065 50.9165C81.1586 50.856 81.0993 50.8055 81.0319 50.7679C80.9645 50.7304 80.8903 50.7064 80.8137 50.6975C80.737 50.6886 80.6594 50.6949 80.5852 50.716C80.5109 50.7371 80.4416 50.7726 80.3811 50.8205C80.3206 50.8684 80.2701 50.9277 80.2326 50.9951C80.195 51.0625 80.1711 51.1367 80.1622 51.2133C80.1622 51.6069 79.5106 56.4119 81.5874 57.1855C85.0892 58.5157 86.9081 53.6836 87.0302 53.4258Z" fill="black"/>
<path d="M104.336 60.2938C104.458 60.036 104.458 59.6423 104.2 59.5202C103.942 59.398 103.562 59.3844 103.427 59.6423C103.427 59.6423 101.35 62.7506 99.2732 62.1127C97.1965 61.4747 98.2416 57.3077 98.2416 57.3077C98.292 57.1529 98.2788 56.9845 98.205 56.8394C98.1312 56.6943 98.0028 56.5845 97.848 56.5341C97.6932 56.4837 97.5247 56.4968 97.3796 56.5706C97.2345 56.6445 97.1247 56.7729 97.0743 56.9277C97.0743 57.1856 95.9206 61.9498 98.8931 63.1442C101.866 64.3387 104.336 60.416 104.336 60.2938Z" fill="black"/>
<path d="M89.6225 70.0121C89.894 69.8899 90.1519 69.4963 90.0161 69.2384C89.8804 68.9805 89.5003 68.7226 89.2424 68.8448C88.3171 69.2088 87.294 69.2399 86.3482 68.9329C85.4024 68.6259 84.5926 67.9998 84.0575 67.1617C84.0205 67.0941 83.9685 67.036 83.9055 66.9918C83.8424 66.9475 83.7701 66.9184 83.694 66.9066C83.6179 66.8948 83.5401 66.9006 83.4666 66.9237C83.3931 66.9467 83.3259 66.9864 83.2702 67.0395C83.2029 67.075 83.1448 67.1256 83.1005 67.1874C83.0562 67.2493 83.027 67.3206 83.0151 67.3957C83.0033 67.4709 83.0091 67.5477 83.0322 67.6202C83.0553 67.6927 83.0949 67.7588 83.1481 67.8132C83.7501 68.9296 84.7523 69.7768 85.9533 70.1846C87.1543 70.5925 88.4651 70.5309 89.6225 70.0121Z" fill="black"/>
<path d="M88.0483 45.255C88.1086 45.1957 88.1565 45.1249 88.1892 45.0468C88.2219 44.9688 88.2388 44.885 88.2388 44.8003C88.2388 44.7157 88.2219 44.6319 88.1892 44.5538C88.1565 44.4758 88.1086 44.405 88.0483 44.3456C87.3128 43.5333 86.3449 42.9673 85.2764 42.7244C84.2078 42.4816 83.0904 42.5737 82.0761 42.9883C81.9375 43.0585 81.8324 43.1809 81.7841 43.3285C81.7357 43.4761 81.748 43.637 81.8182 43.7755C81.8884 43.9141 82.0107 44.0192 82.1584 44.0675C82.306 44.1159 82.4668 44.1036 82.6054 44.0334C83.3682 43.6769 84.2281 43.5848 85.0491 43.7716C85.8701 43.9584 86.6054 44.4135 87.1389 45.065C87.2551 45.1824 87.4033 45.2631 87.565 45.2969C87.7267 45.3307 87.8948 45.3161 88.0483 45.255Z" fill="black"/>
<path d="M104.676 52.0007C104.806 51.9216 104.903 51.7989 104.95 51.6546C104.997 51.5103 104.992 51.3539 104.934 51.2134C104.441 50.2296 103.652 49.4252 102.678 48.9138C101.704 48.4023 100.594 48.2097 99.5045 48.363C99.1244 48.363 98.9887 48.7567 98.9887 49.0146C98.9887 49.2724 99.3823 49.5303 99.6402 49.5303C100.485 49.4495 101.335 49.6139 102.088 50.0039C102.842 50.3939 103.467 50.9929 103.889 51.7292C103.889 52.0007 104.54 52.1228 104.676 52.0007Z" fill="black"/>
<path d="M114.258 64.7052C115.061 64.1572 116.001 63.8424 116.972 63.7958C117.152 63.7958 117.325 63.7243 117.452 63.597C117.58 63.4698 117.651 63.2971 117.651 63.1171C117.651 62.9371 117.58 62.7645 117.452 62.6373C117.325 62.51 117.152 62.4385 116.972 62.4385C115.733 62.4721 114.525 62.8327 113.471 63.4836C113.401 63.5168 113.341 63.5665 113.294 63.6282C113.248 63.69 113.218 63.7621 113.206 63.8383C113.194 63.9145 113.201 63.9924 113.225 64.0654C113.25 64.1384 113.292 64.2043 113.348 64.2573C113.416 64.4327 113.547 64.5762 113.715 64.6593C113.884 64.7423 114.078 64.7587 114.258 64.7052Z" fill="black"/>
</svg>
`;

const base64Svg = `data:image/svg+xml;base64,${btoa(svgStringMobile)}`;


function transformString(input: string) {
    const delimiters = ['Pegue', 'Remova'];
    const placeholder = '{SPLIT_HERE}';
  
    let inputWithPlaceholders = input;
    delimiters.forEach(delimiter => {
        inputWithPlaceholders = inputWithPlaceholders.replace(new RegExp(delimiter, 'g'), placeholder + delimiter);
    });
  
    const segments = inputWithPlaceholders.split(placeholder);
  
    const transformedSegments = segments.map(segment => 
        segment.trim().replace(/\|$/, '')
    ).filter(segment => segment !== ''); 
  
    return transformedSegments;
}


export const Attempt = ({ options, handleAttempt }: AttemptProps) => {
    const theme = useTheme();
    const optionsWithIds = useMemo(() => options.map((option: string, index: number) => ({ id: index, text: option })), []);

    const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);

    const handleSelectAttempt = (id: number) => {
        if (selectedOptionIds.includes(id)) {
            setSelectedOptionIds(selectedOptionIds.filter(optionId => optionId !== id));
        } else {
            setSelectedOptionIds([...selectedOptionIds, id]);
        }
    }

    const finalResult = () => {
        const selectedOptionsString = selectedOptionIds.map((id) => optionsWithIds.find(option => option.id === id)?.text).join('|');
        return transformString(selectedOptionsString);
    }

    return (
        <>
            <DadinhoStack
                direction="row" 
                justifyContent="space-between" 
                sx={{ 
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: "column",
                    },
                }}
            >
                <DadinhoStack direction="column" spacing={1} mt={1}>   
                    <DadinhoStack direction="row" alignItems="center">
                        <DadinhoStack
                            direction="row"
                            flexWrap="wrap"
                            gap={0.5}
                            height="fit-content" 
                            maxWidth="75%"
                            sx={{ 
                                [theme.breakpoints.down('sm')]: {
                                    maxWidth: "60%",
                                },
                            }}
                        >
                            {optionsWithIds.map((option) => {
                                return (
                                    <DadinhoButton
                                        size="medium"
                                        key={option.id}
                                        onClick={() => handleSelectAttempt(option.id)}
                                        disabled={selectedOptionIds.includes(option.id)}
                                    >
                                        <DadinhoTypography variant="body1" py={0.5}>
                                            {option.text}
                                        </DadinhoTypography>
                                    </DadinhoButton>
                                )
                            })}
                        </DadinhoStack>      
                        <DadinhoBox
                            sx={{
                                height: '200px',
                                width: '280px',
                                backgroundImage: `url(${base64Svg})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                zIndex: 10, 
                                ml: -3,
                                mt: -2,
                                mb: -3,
                            }}
                        />
                    </DadinhoStack>
                    <DadinhoBox bgcolor={theme.palette.primary.light} minWidth="30vw" minHeight="110px" borderRadius="10px" padding="10px">
                        <DadinhoStack direction="row" flexWrap="wrap" gap={0.5} p={1.5}>
                            {!selectedOptionIds.length && 
                                <DadinhoTypography color={theme.palette.primary.main} textAlign="center" sx={{ opacity: 0.4}}>
                                    Selecione as palavras acima e forme as frases de comandos necessárias!
                                </DadinhoTypography>
                            }
                            {selectedOptionIds.map((id) => {
                                const option = optionsWithIds.find(option => option.id === id);
                                return (
                                    <DadinhoButton sx={{ bgcolor: theme.palette.primary.contrastText }} key={id} size="medium" onClick={() => handleSelectAttempt(id)}>
                                        <DadinhoTypography variant="body1" py={0.5}>
                                            {option?.text}
                                        </DadinhoTypography>
                                    </DadinhoButton>
                                )
                            })}
                        </DadinhoStack>
                    </DadinhoBox>              
                </DadinhoStack>
            </DadinhoStack>
            <DadinhoButton size="medium" variant="contained" disabled={!selectedOptionIds.length} onClick={() => handleAttempt(finalResult())}>
                Enviar
            </DadinhoButton>
        </>
    );
}

export default Attempt;
