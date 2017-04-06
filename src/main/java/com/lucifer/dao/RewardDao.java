package com.lucifer.dao;

import com.lucifer.model.Reward;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by liufx on 17/4/5.
 */
@Component
public class RewardDao extends IBatisBaseDao{

       public List<Reward> rewardList(){
            return this.sqlSession.selectList("rewardList");
       }
}
