package com.lucifer.dao;

import com.lucifer.model.AnswerResult;
import org.springframework.stereotype.Component;

/**
 * Created by Administrator on 2017/4/9.
 */
@Component
public class AnswerResultDao extends IBatisBaseDao{

    public Integer insertAnswerResult(AnswerResult answerResult){
        return this.sqlSession.insert("insertAnswerResult",answerResult);
    }

    public AnswerResult getAnswerResult(String token){
        return this.sqlSession.selectOne("getAnswerResult",token);
    }
}
