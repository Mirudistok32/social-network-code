import React from 'react';
import s from './UserSettingButton.module.scss';

type PropsType = {
}

export const UserSettingButton: React.FC<PropsType> = (props) => {

  return (
    <span className={s[`icon-setting`]} data-spanUserSettingButton>
      <svg viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="m262.689 176.286c-2.207-.192-4.431-.286-6.689-.286-44.112 0-80 35.888-80 80s35.888 80 80 80c2.258 0 4.482-.094 6.611-.279 41.187-3.386 73.389-38.4 73.389-79.721s-32.202-76.335-73.311-79.714z" />
          <path d="m495.594 216.407c-10.58-10.58-24.641-16.407-39.594-16.407h-16.299c-3.606-11.863-8.359-23.331-14.212-34.292l11.534-11.534c21.828-21.828 21.83-57.354.001-79.197-10.573-10.574-24.638-16.397-39.604-16.397-14.959 0-29.02 5.823-39.594 16.396l-11.534 11.534c-10.961-5.852-22.429-10.605-34.292-14.212v-16.298c0-26.523-18.847-49.604-44.851-54.887-3.677-.738-7.428-1.113-11.149-1.113-14.953 0-29.014 5.827-39.595 16.407-10.579 10.58-16.405 24.641-16.405 39.593v16.298c-11.863 3.606-23.331 8.359-34.292 14.212l-11.534-11.534c-21.828-21.828-57.354-21.83-79.198 0-10.573 10.574-16.396 24.639-16.396 39.604 0 14.958 5.823 29.02 16.396 39.594l11.534 11.534c-5.853 10.961-10.605 22.43-14.212 34.292h-16.298c-30.879 0-56 25.122-56 56 0 14.952 5.826 29.013 16.406 39.593s24.641 16.407 39.594 16.407h16.299c3.606 11.863 8.359 23.331 14.212 34.292l-11.534 11.534c-21.828 21.828-21.83 57.354-.001 79.197 10.573 10.573 24.639 16.396 39.604 16.396 14.959 0 29.02-5.823 39.594-16.396l11.534-11.534c10.961 5.853 22.429 10.605 34.292 14.212v16.299c0 30.878 25.121 56 56 56 3.721 0 7.472-.375 11.149-1.113.012-.002.023-.005.035-.007 10.773-2.188 20.597-7.474 28.41-15.287 10.58-10.58 16.406-24.641 16.406-39.593v-16.298c11.863-3.606 23.331-8.359 34.292-14.212l11.534 11.534c10.915 10.915 25.251 16.373 39.594 16.371 14.339-.001 28.684-5.458 39.604-16.372 10.572-10.574 16.396-24.639 16.396-39.604 0-14.958-5.823-29.02-16.396-39.594l-11.534-11.534c5.853-10.961 10.605-22.43 14.212-34.292h16.298c30.879 0 56-25.122 56-56 0-14.951-5.826-29.012-16.406-39.592zm-157.37 115.645c-19.093 20.633-44.987 33.259-72.913 35.555-2.972.259-6.13.394-9.311.394-61.757 0-112-50.243-112-112s50.243-112 112-112c3.181 0 6.339.135 9.389.4 27.848 2.289 53.742 14.915 72.835 35.548 19.201 20.749 29.776 47.759 29.776 76.051s-10.575 55.302-29.776 76.052z" />
        </g>
      </svg>
    </span>
  );
}
