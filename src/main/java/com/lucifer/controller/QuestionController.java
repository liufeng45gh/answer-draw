package com.lucifer.controller;

import com.lucifer.dao.QuestionDao;
import com.lucifer.model.Question;
import com.wordnik.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by liufx on 17/4/5.
 */
@Controller
public class QuestionController {

    @Resource
    private QuestionDao questionDao;

    @ApiOperation(value = "所有问题")
    @RequestMapping(value="/all-question",method= RequestMethod.GET)
    @ResponseBody
    public List<Question> questionList(){
        return  questionDao.questionList();
    }

    @RequestMapping(value="/start-answer",method= RequestMethod.GET)
    public String startAnswer(){
       return "start-answer";
    }

    @RequestMapping(value="/",method= RequestMethod.GET)
    public String index(){
        return "index";
    }
}
