import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  // query string은 routes path에 영향을 받지 않음
  // http://localhost:3000/edit?id=231561&mode=dark
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  console.log(id);

  const mode = searchParams.get('mode');
  console.log(mode);

  // 페이지를 이동시킬 수 있는 함수를 반환해줌.
  // parameter는 path
  // ex- 로그인 하지 않은 사람이 마이페이지를 이용하려할 때 로그인 페이지로 바꿔버릴 수 있음
  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: 'yejin' })}>
        QS 바꾸기
      </button>

      <button
        onClick={() => {
          navigate('/home');
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
