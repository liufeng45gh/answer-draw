package com.lucifer.dao;

import com.lucifer.model.Question;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by liufx on 17/4/5.
 */

@Component
public class QuestionDao extends IBatisBaseDao {

    public List<Question> questionList(){
        return this.sqlSession.selectList("questionList");
    }
}
