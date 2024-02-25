import { useParams } from 'react-router-dom';

const Diary = () => {
  // path variable을 사용해 커스텀 훅으로 가져올 수 있다.
  // http://localhost:3000/diary/1

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세페이지 입니다.</p>
    </div>
  );
};

export default Diary;
