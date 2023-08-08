const ProblemForm = () => {
    return(
        <div className="container">
            <div className="row text-center mt-4">
                <h2>새 문제 만들기</h2>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                <form>
                    <label htmlFor="problemName">문제지 이름</label>
                    <input className="form-control" id="problemName" placeholder="문제지 이름을 입력하세요"></input>
                    <br/>
                </form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto text-center">
                    <button className="btn btn-warning m-2" type="button">새로운 문제 추가</button>
                    <button className="btn btn-success m-2" type="submit">문제 저장</button>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-8">
                    <form>
                        
                    </form>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-danger">문제 삭제</button>

                </div>
            </div>
        </div>
    )
}

export default ProblemForm