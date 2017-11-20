import React from 'react'

const setActiveTab = (index,activetab) =>{
    return index === activetab ? 'nav-link active' : 'nav-link'
}

const TabsCom = ({tabs, onTabChange, activeTab}) =>(
    
    <div>
        <ul className='nav nav-tabs'>
        {   
            tabs.map((tab,index) =>
                <li className='nav-item' key={index}>
                    <a
                    className={ setActiveTab(index,activeTab)}
                    onClick={() =>onTabChange(index)} >
                    {tab.title}</a>
                </li>
            )
        }
        </ul>
        <div className='tab-content'>
            <div className='tab-pane active'>
                {tabs[activeTab].content}
            </div>
        </div>
    </div>
)
export default TabsCom

TabsCom.defaultProps = {
    activeTab:0
}


